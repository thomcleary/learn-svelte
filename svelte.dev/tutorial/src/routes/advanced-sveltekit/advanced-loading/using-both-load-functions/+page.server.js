export async function load() {
	return {
		message: 'this data came from the server',
		cool: Math.random() > 0.5
	};
}
