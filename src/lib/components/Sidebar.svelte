
<script>
  import { page } from '$app/stores';
  import { derived, writable } from 'svelte/store';
  import { goto } from '$app/navigation';
  import * as LucideIcons from '@lucide/svelte';

  // Sidebar links with paths and icons
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: "Home" },

    // Staff
    { name: "User Management", children: [
        { name: "Users", path: "/staff/user", icon: "User" },
        { name: "Roles & Permissions", path: "/staff/role", icon: "Shield" },
      ]
    },
     { name: "Clients", children: [
        { name: "New Client", path: "/staff/user", icon: "User" },
        { name: "All Clients", path: "/staff/role", icon: "User" },
      ]
    },
     { name: "Quotes", children: [
        { name: "Total Quoted", path: "/quotes", icon: "FilePlus" },
        { name: "Total Converted", path: "quotes", icon: "FilePlus" },
        { name: "Total Overdue", path: "/quotes", icon: "FilePlus" },
      ]
    },
      { name: "Invoices", children: [
        { name: "Total Invoices", path: "/invoices", icon: "FileText" },
        { name: "Total Paid", path: "quotes", icon: "FileText" },
        { name: "Total Due", path: "/quotes", icon: "FileText" },
        { name: "Recuring Invoices", path: "/quotes", icon: "FileText" },
      ]
    },
        { name: "Statements", children: [
        { name: "Day-Month-Year", path: "/statements", icon: "File" },

      ]
    },
        { name: "Accounting", children: [
        { name: "Delivery Note", path: "/delivery-notes", icon: "Truck" },
        { name: "Credit Note", path: "/credit-notes", icon: "CreditCard" },
        { name: "Purchases", path: "/purchase-order", icon: "ShoppingCart" },
        { name: "Cashflow", path: "/cash-flow", icon: "DollarSign" },
        { name: "Profit & Loss", path: "/profit-loss", icon: "Calculator" },
        { name: "Balance Sheet", path: "/reports/balance-sheet", icon: "BookOpen" },
        { name: "Expenses", path: "/reports/expense-summary", icon: "PieChart" },
        { name: "Vat Report", path: "/reports/vat-report", icon: "Percent" },
        { name: "Tax Summary", path: "/reports/tax-summary", icon: "ClipboardList" },
      ]
    },
        { name: "Inventory", children: [
        { name: "Store/Warehouse", path: "/warehouse", icon: "FileText" },
        { name: "Product List", path: "/product-list", icon: "FileText" },
        { name: "Services", path: "/services", icon: "FileText" },
        { name: "Create Voucher", path: "/create-voucher", icon: "FileText" },
        { name: "Stock Transfer", path: "/stock-transfer", icon: "FileText" },
        { name: "Unit of Measure", path: "/unit-of-measure", icon: "FileText" },
      ]
    },
      { name: "Banking", children: [
        { name: "Link Bank Statement/Upload", path: "/link-bank-statement", icon: "FilePlus" },
      ]
    },
    { name: "Payroll", children: [
        { name: "Payroll Report", path: "/reports/payroll", icon: "BarChart" },

      ]
    },
        { name: "Settings", children: [
        { name: "Company Information", path: "/invoices", icon: "Settings" },
        { name: "User Profile", path: "quotes", icon: "Settings" },
        { name: "Banking Details", path: "/quotes", icon: "Settings" },
        { name: "Invoice/Quote Settings", path: "/quotes", icon: "Settings" },
        { name: "Tax Settings", path: "/quotes", icon: "Settings" },
        { name: "Payroll/Payslip Settings - Template", path: "/quotes", icon: "Settings" },

      ]
    },
  ];

  const currentPath = derived(page, ($page) => $page.url.pathname);
  const openMenus = writable({});

  function toggleMenu(name) {
    openMenus.update(menus => ({ ...menus, [name]: !menus[name] }));
  }

  // Full logout logic
  async function handleSidebarLogout() {
    localStorage.removeItem("currentUser");
    await goto("/"); // redirect to home or login
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

  <!-- Upgrade Button -->
  <button
    class="mt-6 mb-2 w-full px-3 py-2 rounded text-white font-semibold bg-blue-500 hover:bg-blue-600 transition"
    on:click={() => goto("/upgrade")}
  >
    Upgrade
  </button>

  <!-- Logout Button -->
  <button
    class="mt-2 w-full px-3 py-2 rounded text-white bg-red-600 hover:bg-red-700 transition"
    on:click={handleSidebarLogout}
  >
    Logout
  </button>
</aside>
