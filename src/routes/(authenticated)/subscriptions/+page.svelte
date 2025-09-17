<script>
  import Card from '$lib/components/Card.svelte';

 
  let subscriptions = [
    { id: 1, plan: 'Basic', status: 'Active', price: 450 },
    { id: 2, plan: 'Premium', status: 'Inactive', price: 600 }
  ];
</script>

<div class="p-6">
  <h1 class="text-3xl font-bold mb-4">Subscriptions</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each subscriptions as sub}
      <Card title={`Plan: ${sub.plan}`} value={`Status: ${sub.status} | Price: R${sub.price}`} />
    {/each}
  </div>
</div>
