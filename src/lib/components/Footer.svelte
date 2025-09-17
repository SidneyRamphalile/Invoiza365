<script>
	import { Facebook, Instagram, Twitter } from 'lucide-svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		AOS.init({ duration: 800, once: true });
	});

	// Smooth scroll function for footer links
	const smoothScroll = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const handleFooterNav = (id) => {
		if (typeof window !== 'undefined' && window.location.pathname === '/') {
			smoothScroll(id);
		} else {
			goto('/#' + id, { noScroll: true }).then(() => smoothScroll(id));
		}
	};
</script>

<footer class="bg-gray-800 text-gray-200 py-12 relative z-10" data-aos="fade-up">
	<div class="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
		<!-- Logo & Description -->
		<div>
			<img src="/invoiza365.png" alt="logo" class="h-12 w-auto mb-4 rounded-md" />
			<p class="text-gray-400 text-sm">
				Software to help you manage clients, track payments, and grow
				your business.
			</p>
		</div>

		<!-- Quick Links -->
		<div>
			<h3 class="text-xl font-bold mb-4">Quick Links</h3>
			<ul class="space-y-2 text-sm">
				<li>
					<a
						href="#home"
						on:click|preventDefault={() => handleFooterNav('home')}
						class="hover:text-blue-500 transition">Home</a
					>
				</li>
				<li>
					<a
						href="#features"
						on:click|preventDefault={() => handleFooterNav('features')}
						class="hover:text-blue-500 transition">Features</a
					>
				</li>
				<li>
					<a
						href="#pricing"
						on:click|preventDefault={() => handleFooterNav('pricing')}
						class="hover:text-blue-500 transition">Pricing</a
					>
				</li>
				<li>
					<a
						href="#faq"
						on:click|preventDefault={() => handleFooterNav('faq')}
						class="hover:text-blue-500 transition">FAQ</a
					>
				</li>
				<li>
					<a
						href="#contact"
						on:click|preventDefault={() => handleFooterNav('contact')}
						class="hover:text-blue-500 transition">Contact Us</a
					>
				</li>
			</ul>
		</div>

		<!-- Legal + Resources & Features -->
		<div>
			<h3 class="text-xl font-bold mb-4">Terms & Conditions</h3>
			<ul class="space-y-2 text-sm mb-4">
				<li><a href="/privacy-policy" class="hover:text-blue-500 transition">Privacy Policy</a></li>
				<li>
					<a href="/terms-and-conditions" class="hover:text-blue-500 transition"
						>Terms & Conditions</a
					>
				</li>
			</ul>
			<h3 class="text-xl font-bold mb-4">Contact Us</h3>
			<ul class="space-y-2 text-sm">
				<p class="text-gray-400 text-sm">Email: support@invoiza365.com</p>
			  <p class="text-gray-400 text-sm">Phone: +27 234 567 890</p>
			</ul>
		</div>

		<!-- Connect / Contact -->
		<div>
			<h3 class="text-xl font-bold mb-4">Connect with us</h3>
			<div class="flex items-center gap-4 mb-4 text-lg">
				<a href="https://facebook.com" target="_blank" class="hover:text-blue-500 transition">
					<Facebook class="w-6 h-6" />
				</a>
				<a href="https://twitter.com" target="_blank" class="hover:text-blue-500 transition">
					<Twitter class="w-6 h-6" />
				</a>
				<a href="https://instagram.com" target="_blank" class="hover:text-blue-500 transition">
					<Instagram class="w-6 h-6" />
				</a>
			</div>
		</div>
	</div>

	<div class="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
		&copy; {new Date().getFullYear()} Invoiza365. All rights reserved.
	</div>
</footer>
