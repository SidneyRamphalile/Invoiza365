<script>
  // List of users
  let users = [
    { name: "Owner", email: "owner@example.com", role: "Owner", img: "https://i.pravatar.cc/150?u=owner" },
    { name: "Accountant", email: "john@example.com", role: "Accountant", img: "https://i.pravatar.cc/150?u=john" },
    { name: "Estimate 1", email: "estimate1@example.com", role: "Estimate 1", img: "https://i.pravatar.cc/150?u=estimate1" },
    { name: "Estimate 2", email: "estimate2@example.com", role: "Estimate 2", img: "https://i.pravatar.cc/150?u=estimate2" }
  ];

  function addNewUser() {
    alert("Redirect to add new user form!");
  }
</script>

<div class="p-6 bg-gray-50 min-h-screen">
  <h1 class="text-2xl font-bold mb-6">Team Members</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {#each users as user}
      <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
        <img src={user.img} alt={user.name} class="w-24 h-24 rounded-full mb-4"/>
        <h2 class="text-lg font-semibold">{user.name}</h2>
        <p class="text-gray-500">{user.email}</p>
        <span class="mt-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{user.role}</span>
      </div>
    {/each}

    <!-- Add New User Card -->
    <div 
      class="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 transition"
      on:click={addNewUser}
    >
      <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-3xl text-gray-600 font-bold">+</div>
      <h2 class="text-lg font-semibold text-gray-700">New User</h2>
      <p class="text-gray-500 mt-1">Click here to add new user</p>
    </div>
  </div>
</div>
