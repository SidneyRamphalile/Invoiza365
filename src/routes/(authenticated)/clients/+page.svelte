<script>
  import Card from '$lib/components/Card.svelte';

  // Placeholder clients
  let clientList = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { name: "Alice Johnson", email: "alice@example.com", phone: "555-123-4567" },
    { name: "Bob Williams", email: "bob@example.com", phone: "444-555-6666" },
    { name: "Charlie Brown", email: "charlie@example.com", phone: "777-888-9999" }
  ];
</script>

<div class="p-6">
  <h1 class="text-3xl font-bold mb-4">Clients</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each clientList as client}
      <Card title={client.name} value={`Email: ${client.email} | Phone: ${client.phone}`} />
    {/each}
  </div>
</div>
