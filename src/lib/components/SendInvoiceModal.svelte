<script>
  import { Mail, MessageCircle, FileText } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";

  export let modalInvoice = null; // Passed from parent

  const dispatch = createEventDispatcher();

  const close = () => dispatch("close");

  const sendEmail = () => {
    alert(`Email sent for Invoice #${modalInvoice?.number}`);
    close();
  };

  const sendWhatsapp = () => {
    alert(`WhatsApp sent for Invoice #${modalInvoice?.number}`);
    close();
  };

  const downloadPDF = () => {
    alert(`PDF downloaded for Invoice #${modalInvoice?.number}`);
    close();
  };
</script>

{#if modalInvoice}
  <div
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg w-full max-w-md p-6 z-50"
    role="dialog"
    aria-modal="true"
  >
    <h2 class="text-xl font-bold mb-4 text-center">Send Invoice</h2>
    <p class="mb-6 text-center">
      Invoice <strong>{modalInvoice.number}</strong> <br />
      Client: {modalInvoice.client} <br />
      Amount: {new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR" }).format(modalInvoice.amount)}
    </p>

    <div class="flex justify-around gap-4 mb-6">
      <button
        type="button"
        class="flex flex-col items-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3 w-20"
        on:click={sendEmail}
      >
        <Mail size={24} />
        <span class="text-xs mt-1">Email</span>
      </button>

      <button
        type="button"
        class="flex flex-col items-center bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 w-20"
        on:click={sendWhatsapp}
      >
        <MessageCircle size={24} />
        <span class="text-xs mt-1">WhatsApp</span>
      </button>

      <button
        type="button"
        class="flex flex-col items-center bg-red-600 hover:bg-red-700 text-white rounded-lg p-3 w-20"
        on:click={downloadPDF}
      >
        <FileText size={24} />
        <span class="text-xs mt-1">PDF</span>
      </button>
    </div>

    <button
      type="button"
      class="block mx-auto text-gray-600 underline text-sm"
      on:click={close}
    >
      Cancel
    </button>
  </div>
{/if}
