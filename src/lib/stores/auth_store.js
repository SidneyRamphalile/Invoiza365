import { writable } from 'svelte/store';

const createAuthStore = () => {
	const { subscribe, set, update } = writable({
		isLoggedIn: false,
		currentUser: null
	});

	return {
		subscribe,

		login: (user = { name: 'John Doe' }) => {
			set({ isLoggedIn: true, currentUser: user });
		},

		logout: () => {
			set({ isLoggedIn: false, currentUser: null });
		}
	};
};

export const authStore = createAuthStore();
