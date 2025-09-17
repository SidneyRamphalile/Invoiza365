<script>
  import Card from '$lib/components/Card.svelte';

  
  let quotes = [
    { id: 1, client: 'John Doe', amount: 300, status: 'Pending' },
    { id: 2, client: 'Jane Smith', amount: 150, status: 'Accepted' }
  ];
</script>

<div class="p-6">
  <h1 class="text-3xl font-bold mb-4">Quotes</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each quotes as quote}
      <Card title={`Client: ${quote.client}`} value={`Amount: $${quote.amount} | Status: ${quote.status}`} />
    {/each}
  </div>
</div>
