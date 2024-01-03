export async function load({ fetch }) {
	const response = await fetch('handlefetch/a');

	return {
		message: await response.text()
	};
}
