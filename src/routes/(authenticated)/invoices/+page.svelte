<script>
  import { Send, Edit, Trash2 } from "lucide-svelte";

  // Fake invoices
  let invoiceList = [
    { id: 1, number: "INV-001", client: "John Doe", amount: 1200, status: "Paid", date: "2025-09-01", due: "2025-09-10" },
    { id: 2, number: "INV-002", client: "Jane Smith", amount: 800, status: "Unpaid", date: "2025-08-15", due: "2025-09-05" },
    { id: 3, number: "INV-003", client: "Alice Johnson", amount: 450, status: "Overdue", date: "2025-07-20", due: "2025-08-01" },
    { id: 4, number: "INV-004", client: "Michael Brown", amount: 2200, status: "Draft", date: "2025-09-05", due: "2025-09-20" },
    { id: 5, number: "INV-005", client: "Emily Davis", amount: 1500, status: "Paid", date: "2025-08-01", due: "2025-08-15" },
    { id: 6, number: "INV-006", client: "Chris Wilson", amount: 670, status: "Unpaid", date: "2025-09-07", due: "2025-09-25" },
    { id: 7, number: "INV-007", client: "Sophia Taylor", amount: 3100, status: "Overdue", date: "2025-07-12", due: "2025-07-30" },
    { id: 8, number: "INV-008", client: "Daniel Martinez", amount: 990, status: "Paid", date: "2025-08-25", due: "2025-09-02" },
    { id: 9, number: "INV-009", client: "Olivia Garcia", amount: 1250, status: "Draft", date: "2025-09-10", due: "2025-09-30" },
    { id: 10, number: "INV-010", client: "Liam Anderson", amount: 540, status: "Unpaid", date: "2025-08-20", due: "2025-09-10" },
  ];

  // Filters
  let filterCustomer = "";
  let filterNumber = "";
  let filterStatus = "All";
  let filterStartDate = "";
  let filterEndDate = "";

  // Modal state
  let showModal = false;
  let invoiceForModal = null;

  const handleEdit = (invoice) => {
    alert(`Editing invoice: ${invoice.number}`);
  };

  const handleDelete = (invoice) => {
    if (confirm(`Are you sure you want to delete ${invoice.number}?`)) {
      invoiceList = invoiceList.filter((i) => i.id !== invoice.id);
    }
  };

  const openModal = (invoice) => {
    invoiceForModal = invoice;
    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
    invoiceForModal = null;
  };

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(value);

  // Reactive filtered list
  $: filteredList = invoiceList
    .filter((i) =>
      filterCustomer ? i.client.toLowerCase().includes(filterCustomer.toLowerCase()) : true
    )
    .filter((i) => (filterNumber ? i.number.includes(filterNumber) : true))
    .filter((i) => (filterStatus !== "All" ? i.status === filterStatus : true))
    .filter((i) => (filterStartDate ? new Date(i.date) >= new Date(filterStartDate) : true))
    .filter((i) => (filterEndDate ? new Date(i.date) <= new Date(filterEndDate) : true));
</script>

<div class="p-6 bg-gray-50 min-h-screen">
  <!-- Header -->
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">Invoices</h1>
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      on:click={() => alert("Open Create Invoice Form")}
    >
      + Create Invoice
    </button>
  </div>

  <!-- Filters -->
  <div class="bg-white rounded-lg shadow p-4 mb-4 grid grid-cols-1 md:grid-cols-5 gap-4">
    <input type="text" placeholder="Search Customer" bind:value={filterCustomer} class="border p-2 rounded"/>
    <input type="text" placeholder="Invoice Number" bind:value={filterNumber} class="border p-2 rounded"/>
    <select bind:value={filterStatus} class="border p-2 rounded">
      <option value="All">All Statuses</option>
      <option value="Overdue">Overdue</option>
      <option value="Unpaid">Unpaid</option>
      <option value="Draft">Draft</option>
      <option value="Paid">Paid</option>
    </select>
    <input type="date" bind:value={filterStartDate} class="border p-2 rounded"/>
    <input type="date" bind:value={filterEndDate} class="border p-2 rounded"/>
  </div>

  <!-- Table -->
  <div class="bg-white rounded-lg shadow overflow-auto max-h-[60vh]">
    <table class="min-w-full border border-gray-200">
      <thead class="bg-gray-50 sticky top-0 z-10">
        <tr>
          <th class="border-b border-gray-200 p-3 text-left text-sm font-medium text-gray-700">Invoice #</th>
          <th class="border-b border-gray-200 p-3 text-left text-sm font-medium text-gray-700">Client</th>
          <th class="border-b border-gray-200 p-3 text-left text-sm font-medium text-gray-700">Amount</th>
          <th class="border-b border-gray-200 p-3 text-left text-sm font-medium text-gray-700">Status</th>
          <th class="border-b border-gray-200 p-3 text-left text-sm font-medium text-gray-700">Due</th>
          <th class="border-b border-gray-200 p-3 text-left text-sm font-medium text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each filteredList as invoice (invoice.id)}
          <tr class="hover:bg-gray-50">
            <td class="p-3 border-b border-gray-200">{invoice.number}</td>
            <td class="p-3 border-b border-gray-200">{invoice.client}</td>
            <td class="p-3 border-b border-gray-200">{formatCurrency(invoice.amount)}</td>
            <td class="p-3 border-b border-gray-200">{invoice.status}</td>
            <td class="p-3 border-b border-gray-200">{invoice.due}</td>
            <td class="p-3 border-b border-gray-200 flex space-x-3">
              <button class="text-blue-600 hover:text-blue-800" on:click={() => openModal(invoice)}>
                <Send size={18}/>
              </button>
              <button class="text-green-600 hover:text-green-800" on:click={() => handleEdit(invoice)}>
                <Edit size={18}/>
              </button>
              <button class="text-red-600 hover:text-red-800" on:click={() => handleDelete(invoice)}>
                <Trash2 size={18}/>
              </button>
            </td>
          </tr>
        {:else}
          <tr>
            <td colspan="6" class="p-4 text-center text-gray-500">No invoices found.</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Modal -->
  {#if showModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">Send Invoice</h2>
        <p class="mb-4">Are you sure you want to send invoice <strong>{invoiceForModal.number}</strong> to {invoiceForModal.client}?</p>
        <div class="flex justify-end space-x-2">
          <button class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" on:click={closeModal}>Cancel</button>
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            on:click={() => {
              alert(`Invoice ${invoiceForModal.number} sent to ${invoiceForModal.client}!`);
              closeModal();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
