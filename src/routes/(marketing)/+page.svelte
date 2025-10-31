<script>
  import { Facebook, Linkedin, Instagram } from 'lucide-svelte';
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({ duration: 800, once: true });
  });
</script>

<!-- HERO SECTION -->
<section id="home" class="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden scroll-mt-24">
  <!-- Decorative circles -->
  <div class="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
  <div class="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>

  <img src="/invoiza365-without-background.png" alt="Invoiza Logo" class="h-26 w-auto mb-6 relative z-10" data-aos="fade-down" />
  <h1 class="text-4xl font-bold text-gray-800 mb-4 relative z-10" data-aos="fade-up" data-aos-delay="100">
    Welcome to <span class="text-blue-600">InvoiZA365</span>
  </h1>
  <p class="text-lg text-gray-600 max-w-2xl mb-6 relative z-10" data-aos="fade-up" data-aos-delay="200">
    Simple and powerful invoicing software to help you manage clients, track payments, and grow your business with ease.
  </p>
  <div class="flex gap-4 relative z-10" data-aos="fade-up" data-aos-delay="300">
    <a href="/register" class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Get Started</a>
    <a href="/login" class="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">Login</a>
  </div>
</section>

<!-- FEATURES / RESOURCES SECTION -->
<section id="resources" class="relative py-20 text-center overflow-hidden bg-cover bg-center scroll-mt-24" style="background-image: url('/artificial-intelligence.jpg');">
  <div class="absolute inset-0 bg-white/20 md:bg-white/30 pointer-events-none"></div>
  <h2 class="text-3xl font-bold text-gray-800 mb-12 relative z-10" data-aos="fade-up">Why Choose InvoiZA365?</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
    <div class="p-6 border rounded-lg bg-white/80 shadow-md transform transition duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-xl font-semibold mb-3">Manage Clients</h3>
      <p class="text-gray-600">Keep all your client information in one place, easy to access and update.</p>
    </div>
    <div class="p-6 border rounded-lg bg-white/80 shadow-md transform transition duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-xl font-semibold mb-3">Track Payments</h3>
      <p class="text-gray-600">Monitor outstanding invoices and receive timely payment notifications.</p>
    </div>
    <div class="p-6 border rounded-lg bg-white/80 shadow-md transform transition duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="300">
      <h3 class="text-xl font-semibold mb-3">Analytics & Insights</h3>
      <p class="text-gray-600">Understand your business performance with clear dashboards and reports.</p>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="relative py-20 bg-gray-50 text-center overflow-hidden scroll-mt-24">
  <div class="absolute top-0 left-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/3"></div>
  <h2 class="text-3xl font-bold text-gray-800 mb-12 relative z-10" data-aos="fade-up">How It Works</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
    <div class="p-6 rounded-xl bg-white shadow-md transition transform hover:bg-blue-500 hover:text-white hover:-translate-y-2 hover:shadow-xl cursor-pointer" data-aos="fade-right" data-aos-delay="100">
      <h3 class="text-xl font-semibold mb-3">1. Sign Up</h3>
      <p>Create your account and set up your business profile in minutes.</p>
    </div>
    <div class="p-6 rounded-xl bg-white shadow-md transition transform hover:bg-blue-500 hover:text-white hover:-translate-y-2 hover:shadow-xl cursor-pointer" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-xl font-semibold mb-3">2. Create Invoices</h3>
      <p>Generate professional invoices and quotes for your clients easily.</p>
    </div>
    <div class="p-6 rounded-xl bg-white shadow-md transition transform hover:bg-blue-500 hover:text-white hover:-translate-y-2 hover:shadow-xl cursor-pointer" data-aos="fade-left" data-aos-delay="300">
      <h3 class="text-xl font-semibold mb-3">3. Send & Track</h3>
      <p>Send invoices instantly and track payment status until it’s complete.</p>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="relative py-20 text-center overflow-hidden bg-cover bg-center z-0 scroll-mt-24" style="background-image: url('/services.jpg'); background-attachment: fixed;">
  <div class="absolute inset-0 bg-black/30"></div>
  <div class="relative z-10 flex flex-col items-center justify-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white" data-aos="zoom-in">Ready to simplify your invoicing?</h2>
    <p class="mb-10 max-w-xl mx-auto text-white text-lg md:text-xl" data-aos="zoom-in" data-aos-delay="100">
      Start using Invoiza today and take full control of your business finances.
    </p>
    <a href="/register" class="px-10 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg md:text-xl shadow-xl transition transform hover:bg-blue-600" data-aos="zoom-in" data-aos-delay="200">
      Get Started
    </a>
  </div>
</section>

<!-- PRICING & FEATURES SECTION -->
<section id="pricing" class="py-20 bg-gray-50 scroll-mt-24">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">Pricing & Features</h2>
    <p class="text-center text-blue-600 font-medium mb-12">30 day Free Trial</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- BRONZE PLAN -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        <div class="bg-blue-400 text-white py-6 px-4 text-center">
          <h3 class="text-xl font-semibold">BRONZE</h3>
          <p class="text-2xl font-bold">R129<span class="text-sm font-normal"> / month</span></p>
        </div>
        <ul class="p-6 space-y-3 text-gray-700">
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Admin dashboard</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Dashboard Overview</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Single User</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Client Statements</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Invoicing and Quoting</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Recurring Invoices</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Send quote via WhatsApp</li>
        </ul>
        <div class="p-6 text-center">
          <a href="/register" class="inline-block w-full py-2 rounded-lg bg-blue-400 text-white font-medium hover:bg-blue-500 transition">Get Started</a>
        </div>
      </div>

      <!-- SILVER PLAN -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        <div class="bg-blue-500 text-white py-6 px-4 text-center">
          <h3 class="text-xl font-semibold">SILVER</h3>
          <p class="text-2xl font-bold">R169<span class="text-sm font-normal"> / month</span></p>
        </div>
        <ul class="p-6 space-y-3 text-gray-700">
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Admin dashboard</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Dashboard Overview</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Multi Users - 2+</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Multi Store Inventory Management</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Client Statements</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Invoicing and Quoting</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Expense Management</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Recurring Invoices</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Payment Tracking</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Accounting Reports (Income Statement, Profit and Loss etc)</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Send quote via WhatsApp</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Tax Calculation Payroll</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Expense Tracking</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> WhatsApp</li>
        </ul>
        <div class="p-6 text-center">
          <a href="/register" class="inline-block w-full py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">Get Started</a>
        </div>
      </div>

      <!-- GOLD PLAN -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
        <div class="bg-blue-700 text-white py-6 px-4 text-center">
          <h3 class="text-xl font-semibold">GOLD</h3>
          <p class="text-2xl font-bold">R249<span class="text-sm font-normal"> / month</span></p>
        </div>
        <ul class="p-6 space-y-3 text-gray-700">
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Admin dashboard</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Dashboard Overview</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Multi Users - 5+</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Multi Store Inventory Management</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Client Statements</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Dashboard Overview</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Invoicing and Quoting</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Expense Management</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Recurring Invoices</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Payment Tracking</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Accounting Reports (Income Statement, Profit and Loss etc)</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Bank Reconciliation</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Financial Reports</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Tax Calculation</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Send quote via WhatsApp</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Expense Tracking</li>
          <li class="pl-6 flex items-center gap-2"><span class="text-blue-500">✔</span> Payroll</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> Multi-Currency Support</li>
          <li class="flex items-center gap-2"><span class="text-blue-500">✔</span> WhatsApp Chatbot</li>
        </ul>
        <div class="p-6 text-center">
          <a href="/register" class="inline-block w-full py-2 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- FAQ SECTION -->
<section id="faq" class="relative py-20 bg-white text-center overflow-hidden scroll-mt-24">
  <h2 class="text-3xl font-bold text-gray-800 mb-12" data-aos="fade-up">Frequently Asked Questions</h2>
  <div class="max-w-4xl mx-auto space-y-6 text-left">
    <div class="p-6 border rounded-xl bg-gray-50 shadow-md transition transform hover:bg-blue-500 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-xl font-semibold mb-2">Can I try Invoiza for free?</h3>
      <p>Yes! You can start with our free trial and explore all the basic features for 14 days.</p>
    </div>
    <div class="p-6 border rounded-xl bg-gray-50 shadow-md transition transform hover:bg-blue-500 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-xl font-semibold mb-2">How do I upgrade my plan?</h3>
      <p>You can upgrade anytime from your account dashboard with a single click.</p>
    </div>
    <div class="p-6 border rounded-xl bg-gray-50 shadow-md transition transform hover:bg-blue-500 hover:text-white cursor-pointer" data-aos="fade-up" data-aos-delay="300">
      <h3 class="text-xl font-semibold mb-2">Is my data secure?</h3>
      <p>Absolutely. We use industry-standard encryption and secure cloud storage to protect your data.</p>
    </div>
  </div>
</section>

<!-- CONTACT SECTION -->
<section id="contact" class="relative py-20 bg-gray-50 text-center overflow-hidden scroll-mt-24">
  <h2 class="text-3xl font-bold text-gray-800 mb-12" data-aos="fade-up">Get in Touch</h2>
  <div class="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg relative z-10" data-aos="fade-up" data-aos-delay="100">
    <form action="/api/contact" method="POST" class="grid grid-cols-1 gap-6">
      <div class="flex flex-col text-left">
        <label for="name" class="mb-2 font-semibold text-gray-700">Name</label>
        <input id="name" name="name" type="text" placeholder="Your full name" class="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div class="flex flex-col text-left">
        <label for="email" class="mb-2 font-semibold text-gray-700">Email</label>
        <input id="email" name="email" type="email" placeholder="your@email.com" class="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div class="flex flex-col text-left">
        <label for="message" class="mb-2 font-semibold text-gray-700">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." class="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
      </div>
      <button type="submit" class="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">Send Message</button>
    </form>
  </div>
</section>

