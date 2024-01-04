import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
	if (!cookies.get('logged_in')) {
		throw redirect(
			303,
			`/advanced-sveltekit/advanced-routing/route-groups/login?redirectTo=${url.pathname}`
		);
	}
}
