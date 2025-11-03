<script>
  import "$lib/app.css";
  import { goto } from "$app/navigation";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount, onDestroy } from "svelte";

  let isLoggedIn = false;
  let currentUser = null;
  let mobileOpen = false; // toggle for mobile menu

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
    const interval = setInterval(checkLogin, 200);
    onDestroy(() => clearInterval(interval));
  });

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

  const handleNav = async (id) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      await goto(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
    mobileOpen = false; // close mobile menu after click
  };
</script>

<nav class="flex justify-between items-center px-8 py-4 bg-white shadow-md relative">
  <!-- Logo -->
  <div class="flex items-center">
    <a href="/" class="flex items-center">
      <img src="/invoiza365.png" alt="logo" class="h-12 w-auto mr-2" />
    </a>
  </div>

  <!-- Desktop Nav Items -->
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

  <!-- Right: Auth buttons + Hamburger -->
  <div class="flex items-center gap-4">
    {#if isLoggedIn}
      <span class="text-gray-700 hidden md:inline">Hello, {currentUser?.name}</span>
      <a href="/dashboard" class="text-gray-700 hover:text-blue-600 hidden md:inline">Dashboard</a>
      <button on:click={logout}
              class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hidden md:inline">Logout</button>
    {:else}
      <a href="/login" class="text-gray-700 hover:text-blue-600 hidden md:inline">Login</a>
      <a href="/register" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hidden md:inline">Register</a>
    {/if}

    <!-- Hamburger button (mobile only) -->
    <button class="md:hidden p-2 rounded hover:bg-gray-100" on:click={() => mobileOpen = !mobileOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileOpen}
    <div class="absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden z-20">
      <a href="/#home" class="px-4 py-2 border-b" on:click={() => handleNav("home")}>Home</a>
      <a href="/#pricing" class="px-4 py-2 border-b" on:click={() => handleNav("pricing")}>Pricing & Features</a>
      <a href="/#faq" class="px-4 py-2 border-b" on:click={() => handleNav("faq")}>FAQ</a>
      <a href="/#contact" class="px-4 py-2 border-b" on:click={() => handleNav("contact")}>Contact Us</a>
      {#if isLoggedIn}
        <a href="/dashboard" class="px-4 py-2 border-b" on:click={() => { goto("/dashboard"); mobileOpen=false; }}>Dashboard</a>
        <button on:click={logout} class="px-4 py-2 text-left border-b w-full">Logout</button>
      {:else}
        <a href="/login" class="px-4 py-2 border-b" on:click={() => { goto("/login"); mobileOpen=false; }}>Login</a>
        <a href="/register" class="px-4 py-2 border-b" on:click={() => { goto("/register"); mobileOpen=false; }}>Register</a>
      {/if}
    </div>
  {/if}
</nav>

<main>
  <slot />
</main>

{#if !isLoggedIn}
  <Footer />
{/if}

<style>
  html { scroll-behavior: smooth; }
</style>
