<script>
  import { onMount } from "svelte";
  import { Plus, UserPlus, FilePlus, Receipt, Building2, Goal, Briefcase, Users, DollarSign, X } from "lucide-svelte";

  let totalClients = 0;
  let totalInvoices = 0;
  let pendingPayments = 0;

  let userName = "";
  let isLoggedIn = false;
  let showModal = false;

  onMount(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      userName = JSON.parse(storedUser).name;
      isLoggedIn = true;
    }
  });

  function toggleModal() {
    showModal = !showModal;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<!-- Page content -->
<div class="p-6 relative">
  <!-- Welcome message with plus button -->
  <div class="flex items-center mb-6">
    <h1 class="text-2xl font-bold">Welcome, {userName}!</h1>
    <button
      on:click={toggleModal}
      class="ml-3 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
    >
      <Plus size={20} />
    </button>
  </div>

  <!-- Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="p-4 bg-white rounded shadow">
      <h2 class="text-lg font-bold mb-2">Total Clients</h2>
      <p class="text-2xl">{totalClients}</p>
    </div>

    <div class="p-4 bg-white rounded shadow">
      <h2 class="text-lg font-bold mb-2">Total Invoices</h2>
      <p class="text-2xl">{totalInvoices}</p>
    </div>

    <div class="p-4 bg-white rounded shadow">
      <h2 class="text-lg font-bold mb-2">Pending Payments</h2>
      <p class="text-2xl">{pendingPayments}</p>
    </div>
  </div>

  <!-- Charts & stats placeholder -->
  <div class="mt-6 p-4 bg-white rounded shadow">
    <h2 class="text-lg font-bold mb-2">Charts & Stats</h2>
    <p class="text-gray-500">Charts and stats will appear here.</p>
  </div>

  <!-- Modal -->
  {#if showModal}
    <div class="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
      <div
        class="bg-white rounded-lg shadow-lg w-96 p-6 pointer-events-auto"
      >
        <h2 class="text-xl font-bold mb-4 flex items-center">
          <Plus class="mr-2" /> Create New
        </h2>

        <ul class="space-y-3 mb-4">
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <UserPlus size={18} /> <span>Create New Customer</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <Building2 size={18} /> <span>Create New Vendor</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <FilePlus size={18} /> <span>Create New Proposal</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <Receipt size={18} /> <span>Create New Invoice</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <Briefcase size={18} /> <span>Create New Product</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <DollarSign size={18} /> <span>Create New Bill</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <Users size={18} /> <span>Create New Account</span>
          </li>
          <li class="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded cursor-pointer">
            <Goal size={18} /> <span>Create New Goal</span>
          </li>
        </ul>

        <!-- Close button at the bottom -->
        <button
          on:click={closeModal}
          class="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded flex justify-center items-center"
        >
          <X size={18} class="mr-1" /> Close
        </button>
      </div>
    </div>
  {/if}
</div>
