<script>
  let email = "";
  let message = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy response – replace later with API call
    message = "If this email exists, a reset link will be sent.";
  };
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white p-8 rounded shadow-md w-96">
    <h1 class="text-2xl font-bold mb-6 text-center">Forgot Password</h1>

    {#if message}
      <div class="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm">
        {message}
      </div>
    {/if}

    <form on:submit={handleSubmit} class="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        bind:value={email}
        class="border p-2 rounded"
        required
      />

      <button
        type="submit"
        class="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Send Reset Link
      </button>
    </form>

    <div class="text-sm mt-4 text-center">
      Remembered your password? 
      <a href="/login" class="text-blue-500 hover:underline">Login</a>
    </div>
  </div>
</div>
