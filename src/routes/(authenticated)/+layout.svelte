<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '$lib/app.css';

	// Map of route paths to titles
	const titles = {
		'/dashboard': 'Dashboard',
		'/clients': 'Clients',
		'/invoices': 'Invoices',
		'/quotes': 'Quotes',
		'/subscriptions': 'Subscriptions',
		'/profile': 'Profile',
		'/support': 'Support'
	};

	// Derived store for the current page title
	const currentTitle = derived(page, ($page) => titles[$page.url.pathname] || '');
</script>

<div class="flex min-h-screen">
	<!-- Sidebar always visible -->
	<Sidebar />

	<!-- Main content area -->
	<div class="flex-1 flex flex-col bg-gray-100">
		<!-- Header -->
		<header class="p-6 border-b border-gray-300 bg-white flex justify-between items-center">
			<h1 class="text-3xl font-bold">{$currentTitle}</h1>
		</header>

		<!-- Page content -->
		<main class="flex-1 p-6 overflow-auto">
			<slot />
		</main>
	</div>
</div>
