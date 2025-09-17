<script>
  export let phone = "27820000000"; // default number
  export let message = "";
  export let visible = false;

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
</script>

{#if visible}
  <button
    class="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
    on:click={openWhatsApp}
    aria-label="Send WhatsApp"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.004 2C6.476 2 2 6.476 2 12c0 1.982.52 3.828 1.417 5.428L2 22l4.644-1.383A9.956 9.956 0 0012.004 22c5.528 0 10.004-4.476 10.004-10 0-5.528-4.476-10-10.004-10zm5.22 14.332c-.23.646-1.31 1.22-1.802 1.3-.477.078-1.07.11-3.09-.933-2.57-1.26-4.21-3.39-4.33-3.53-.12-.143-1-1.23-1-2.35 0-1.122.58-1.67.785-1.898.204-.228.44-.285.59-.285.152 0 .302 0 .436.004.14.004.328-.05.513.378.18.428.61 1.48.664 1.592.056.11.093.236.015.38-.077.143-.117.236-.23.36-.113.122-.238.27-.337.362-.102.094-.206.197-.092.39.115.193.51.81 1.094 1.31.753.633 1.38.84 1.59.938.21.098.334.08.46-.05.123-.13.53-.617.672-.83.14-.214.28-.178.47-.107.19.07 1.19.56 1.39.66.203.098.338.146.39.23.053.083.053.48-.177 1.127z"/>
    </svg>
  </button>
{/if}
