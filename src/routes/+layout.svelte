<script>
  import "$lib/app.css";
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount, onDestroy } from "svelte";

  // Persistent auth state
  let isLoggedIn = false;
  let currentUser = null;

  // Initialize auth state on mount
  const checkLogin = () => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (!isLoggedIn) {
        currentUser = user;
        isLoggedIn = true;
      }
    } else {
      if (isLoggedIn) {
        currentUser = null;
        isLoggedIn = false;
      }
    }
  };

  onMount(() => {
    checkLogin();
    // Poll localStorage to react to login/logout instantly
    const interval = setInterval(checkLogin, 200);
    onDestroy(() => clearInterval(interval));
  });

  // Fake login function (for testing)
  const login = async () => {
    currentUser = { name: "John Doe" };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    isLoggedIn = true;
    await goto("/dashboard");
  };

  const logout = async () => {
    localStorage.removeItem("currentUser");
    currentUser = null;
    isLoggedIn = false;
    await goto("/");
  };

  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

const handleNav = async (id) => {
  if (typeof window === "undefined") return;

  if (window.location.pathname === "/") {
    // We're already on home page, scroll directly
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    // Navigate to home page with hash
    await goto(`/#${id}`);
    
    // Wait for page load and then scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
};
</script>

<nav class="flex justify-between items-center px-8 py-4 bg-white shadow-md">
  <!-- Left: Logo -->
  <div class="flex items-center">
    <a href="/" class="flex items-center">
      <img src="/invoiza365.png" alt="logo" class="h-12 w-auto mr-2" />
    </a>
  </div>

  <!-- Center: Nav Items -->
  <div class="flex-1 hidden md:flex justify-center items-center gap-6">
    <a href="/#home" class="px-3 py-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition"
       on:click|preventDefault={() => handleNav("home")}>Home</a>

   <a href="/#pricing" class="px-3 py-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition"
   on:click|preventDefault={() => handleNav("pricing")}>Pricing & Features</a>

    <a href="/#faq" class="px-3 py-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition"
       on:click|preventDefault={() => handleNav("faq")}>FAQ</a>

    <a href="/#contact" class="px-3 py-2 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition"
       on:click|preventDefault={() => handleNav("contact")}>Contact Us</a>
  </div>

  <!-- Right: Auth buttons -->
  <div class="flex items-center gap-6">
    {#if isLoggedIn}
      <span class="text-gray-700">Hello, {currentUser?.name}</span>
      <a href="/dashboard" class="text-gray-700 hover:text-blue-600">Dashboard</a>
      <button on:click={logout}
              class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
    {:else}
      <a href="/login" class="text-gray-700 hover:text-blue-600">Login</a>
      <a href="/register" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Register</a>
    {/if}
  </div>
</nav>

<main>
  <slot />
</main>

<!-- Show footer only if NOT logged in -->
{#if !isLoggedIn}
  <Footer />
{/if}

<style>
  html { scroll-behavior: smooth; }
</style>
