import { redirect } from '@sveltejs/kit';

export const actions = {
	default: ({ cookies }) => {
		cookies.delete('logged_in', { path: '/' });
		throw redirect(303, '/advanced-sveltekit/advanced-routing/route-groups');
	}
};
