<script>
  import Card from '$lib/components/Card.svelte';

  // Mock user data (replace with real data if available)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
</script>

<div class="p-6">
  <h1 class="text-3xl font-bold mb-4">Profile</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card title="Name" value={user?.name || 'N/A'} />
    <Card title="Email" value={user?.email || 'N/A'} />
    <Card title="Subscription Status" value="Active (mock)" />
  </div>
</div>
