<script>
  import { goto } from "$app/navigation";

  let name = "";
  let email = "";
  let password = "";
  let error = "";

  async function handleFormSubmit(event) {
    event.preventDefault();

    //  Dummy login logic
    if (email === "test@example.com" && password === "123456") {
      // Save to localStorage (optional, simulates auth)
      localStorage.setItem("authToken", "dummy-token");
      localStorage.setItem("currentUser", JSON.stringify({ name, email }));

      // Redirect to dashboard
      await goto("/dashboard");
    } else {
      error = "Invalid email or password. Please try again.";
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded shadow-md w-96">
    <h1 class="text-2xl font-bold mb-6">Login</h1>

    {#if error}
      <div class="text-red-500 mb-4">{error}</div>
    {/if}

    <form on:submit={handleFormSubmit} class="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        bind:value={name}
        class="border p-2 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        bind:value={email}
        class="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        bind:value={password}
        class="border p-2 rounded"
      />

      <button
        type="submit"
        class="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>

      <div class="flex justify-between text-sm mt-2">
        <a href="/forgot-password" class="text-blue-500 hover:underline">Forgot password?</a>
      </div>

      <div class="text-sm mt-4 text-center">
        Don't have an account?
        <a href="/register" class="text-green-500 hover:underline">Create one</a>
      </div>
    </form>
  </div>
</div>
