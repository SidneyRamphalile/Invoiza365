<script>
  import { page } from '$app/stores';
  import { derived, writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import * as LucideIcons from '@lucide/svelte';

  // Sidebar links with paths and icons
  const links = [
  { name: "Dashboard", path: "/dashboard", icon: "Home" },

  // Staff
  { name: "Staff", children: [
      { name: "User", path: "/staff/user", icon: "User" },
      { name: "Role", path: "/staff/role", icon: "Shield" },
    ]
  },

  { name: "Clients", path: "/clients", icon: "Users" },
  { name: "Invoices", path: "/invoices", icon: "FileText" },
  { name: "Quotes", path: "/quotes", icon: "FilePlus" },
  { name: "Statements", path: "/statements", icon: "File" },
  { name: "Delivery Notes", path: "/delivery-notes", icon: "Truck" },
  { name: "Credit Notes", path: "/credit-notes", icon: "CreditCard" },
  { name: "Purchase Order", path: "/purchase-order", icon: "ShoppingCart" },
  { name: "Accounting", path: "/accounting", icon: "Calculator" },
  { name: "Banking", path: "/banking", icon: "Bank" },

  // Reports
  { name: "Reports", children: [
      { name: "Income Statement", path: "/reports/income-statement", icon: "BarChart" },
      { name: "Income Summary", path: "/reports/income-summary", icon: "PieChart" },
      { name: "Expense Summary", path: "/reports/expense-summary", icon: "PieChart" },
      { name: "Income vs Expense", path: "/reports/income-vs-expense", icon: "BarChart" },
      { name: "Cash Flow", path: "/reports/cash-flow", icon: "DollarSign" },
      { name: "General Ledger", path: "/reports/general-ledger", icon: "Book" },
      { name: "Balance Sheet", path: "/reports/balance-sheet", icon: "BookOpen" },
      { name: "Financial Year End", path: "/reports/financial-year-end", icon: "Calendar" },
    ]
  },

  { name: "Profile", path: "/profile", icon: "User" },
  { name: "Documents", path: "/documents", icon: "Folder" },
  { name: "Settings", path: "/settings", icon: "Settings" },
];


  const currentPath = derived(page, ($page) => $page.url.pathname);
  const openMenus = writable({});

  function toggleMenu(name) {
    openMenus.update(menus => ({ ...menus, [name]: !menus[name] }));
  }

  function handleSidebarLogout() {
    console.log("Logging out...");
  }
</script>

<aside class="w-64 min-h-screen p-4 border-2 border-blue-500 rounded-lg shadow-md bg-white">
  <h2 class="text-2xl font-bold mb-6 text-blue-700 text-center">Invoiza365</h2>

  <nav class="flex flex-col gap-2">
    {#each links as link}
      <div>
        {#if link.children}
          <!-- Parent menu -->
          <div
            class="px-3 py-2 rounded flex justify-between items-center cursor-pointer font-bold transition-colors
            { $openMenus[link.name] ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white' : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-white' }"
            on:click={() => toggleMenu(link.name)}
          >
            <span class="flex items-center gap-2">
              {#if link.icon}
                <svelte:component this={LucideIcons[link.icon]} size={18} />
              {/if}
              {link.name}
            </span>
            <span class="text-gray-500 text-sm">
              {#if $openMenus[link.name]}▾{:else}▸{/if}
            </span>
          </div>

          {#if $openMenus[link.name]}
            <div class="ml-4 flex flex-col gap-1 mt-1">
              {#each link.children as child}
                <a
                  href={child.path}
                  class="px-3 py-2 rounded flex items-center gap-2 font-normal transition
                  { $currentPath === child.path ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold' : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-white' }"
                >
                  {#if child.icon}
                    <svelte:component this={LucideIcons[child.icon]} size={16} />
                  {/if}
                  {child.name}
                </a>
              {/each}
            </div>
          {/if}
        {:else}
          <!-- Single link -->
          <a
            href={link.path}
            class="px-3 py-2 rounded flex items-center gap-2 font-bold transition
            { $currentPath === link.path ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white' : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-white' }"
          >
            {#if link.icon}
              <svelte:component this={LucideIcons[link.icon]} size={18} />
            {/if}
            {link.name}
          </a>
        {/if}
      </div>
    {/each}
  </nav>

  <button
    class="mt-6 mb-2 w-full px-3 py-2 rounded text-white font-semibold bg-blue-500 hover:bg-blue-600 transition"
    on:click={() => goto("/upgrade")}
  >
    Upgrade
  </button>

  <button
    class="mt-2 w-full px-3 py-2 rounded text-white bg-red-600 hover:bg-red-700 transition"
    on:click={handleSidebarLogout}
  >
    Logout
  </button>
</aside>
