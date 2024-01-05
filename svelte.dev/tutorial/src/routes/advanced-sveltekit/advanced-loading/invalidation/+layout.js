export async function load({ fetch }) {
	const response = await fetch('/advanced-sveltekit/advanced-loading/invalidation/api/now');
	const now = await response.json();

	return {
		now
	};
}
