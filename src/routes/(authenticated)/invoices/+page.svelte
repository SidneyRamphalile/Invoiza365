<script>
  import { Send, Edit, Trash2, Mail, FileText, MessageCircle } from "lucide-svelte";

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

  // Floating WhatsApp button
  let whatsappNumber = "27820000000"; // replace with your number
  let whatsappMessage = "Hello! I would like to inquire about an invoice.";

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

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

  const sendEmail = () => {
    alert(`Email sent for Invoice #${invoiceForModal.number}`);
    closeModal();
  };

  const sendWhatsapp = () => {
    alert(`WhatsApp sent for Invoice #${invoiceForModal.number}`);
    closeModal();
  };

  const downloadPDF = () => {
    alert(`PDF downloaded for Invoice #${invoiceForModal.number}`);
    closeModal();
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
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-lg w-96 p-6">
        <h2 class="text-xl font-bold mb-4">Send Invoice</h2>
        <p class="mb-4">Invoice <strong>{invoiceForModal.number}</strong> for {invoiceForModal.client}</p>

        <!-- Buttons -->
        <div class="flex justify-between mt-4 space-x-4">
          <button class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl shadow" on:click={sendEmail}>
            <Mail size={20}/> <span>Email</span>
          </button>
          <button class="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl shadow" on:click={sendWhatsapp}>
            <MessageCircle size={20}/> <span>WhatsApp</span>
          </button>
          <button class="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl shadow" on:click={downloadPDF}>
            <FileText size={20}/> <span>PDF</span>
          </button>
        </div>
      </div>
    </div>
  {/if}

  <!-- Floating WhatsApp Button -->
  <button
    class="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
    on:click={openWhatsApp}
    aria-label="Send WhatsApp"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.004 2C6.476 2 2 6.476 2 12c0 1.982.52 3.828 1.417 5.428L2 22l4.644-1.383A9.956 9.956 0 0012.004 22c5.528 0 10.004-4.476 10.004-10 0-5.528-4.476-10-10.004-10zm5.22 14.332c-.23.646-1.31 1.22-1.802 1.3-.477.078-1.07.11-3.09-.933-2.57-1.26-4.21-3.39-4.33-3.53-.12-.143-1-1.23-1-2.35 0-1.122.58-1.67.785-1.898.204-.228.44-.285.59-.285.152 0 .302 0 .436.004.14.004.328-.05.513.378.18.428.61 1.48.664 1.592.056.11.093.236.015.38-.077.143-.117.236-.23.36-.113.122-.238.27-.337.362-.102.094-.206.197-.092.39.115.193.51.81 1.094 1.31.753.633 1.38.84 1.59.938.21.098.334.08.46-.05.123-.13.53-.617.672-.83.14-.214.28-.178.47-.107.19.07 1.19.56 1.39.66.203.098.338.146.39.23.053.083.053.48-.177 1.127z"/>
    </svg>
  </button>
</div>
