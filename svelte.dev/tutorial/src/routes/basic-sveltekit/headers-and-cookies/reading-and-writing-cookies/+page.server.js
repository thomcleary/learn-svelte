export function load({ cookies }) {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', {
		path: '/'
	});

	console.log(cookies.getAll());

	return {
		visited: visited === 'true'
	};
}
