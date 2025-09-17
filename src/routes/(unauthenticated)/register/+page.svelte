<script>
  import { goto } from "$app/navigation";

  // Form fields
  let name = "";
  let email = "";
  let phone = "";
  let password = "";
  let confirmPassword = "";

  // UI feedback
  let error = "";
  let success = "";

  // Handle registration
  const handleRegister = () => {
    // Basic validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      error = "All fields are required.";
      success = "";
      return;
    }

    if (password !== confirmPassword) {
      error = "Passwords do not match.";
      success = "";
      return;
    }

    // Dummy login after registration (replace with real API later)
    success = "Registration successful! Redirecting to dashboard...";
    error = "";

    // Redirect after a short delay
    setTimeout(() => goto("/dashboard"), 1000);
  };

  // Allow pressing Enter to submit
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleRegister();
  };
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded shadow-md w-96">
    <h1 class="text-2xl font-bold mb-6">Register</h1>

    {#if error}
      <div class="text-red-500 mb-4">{error}</div>
    {/if}

    {#if success}
      <div class="text-green-500 mb-4">{success}</div>
    {/if}

    <div class="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        bind:value={name}
        class="border p-2 rounded"
        on:keypress={handleKeyPress}
      />

      <input
        type="email"
        placeholder="Email"
        bind:value={email}
        class="border p-2 rounded"
        on:keypress={handleKeyPress}
      />

      <input
        type="tel"
        placeholder="Phone number"
        bind:value={phone}
        class="border p-2 rounded"
        on:keypress={handleKeyPress}
      />

      <input
        type="password"
        placeholder="Password"
        bind:value={password}
        class="border p-2 rounded"
        on:keypress={handleKeyPress}
      />

      <input
        type="password"
        placeholder="Confirm password"
        bind:value={confirmPassword}
        class="border p-2 rounded"
        on:keypress={handleKeyPress}
      />

      <button
        class="bg-green-500 text-white py-2 rounded hover:bg-green-600"
        on:click={handleRegister}
      >
        Register
      </button>

      <div class="text-sm mt-2">
        Already have an account? 
        <a href="/login" class="text-blue-500 hover:underline">Login</a>
      </div>
    </div>
  </div>
</div>
