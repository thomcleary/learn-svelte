export async function handle({ event, resolve }) {
	if (event.url.pathname === '/ping') {
		return new Response('pong');
	}

	event.locals.answer = 42;

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace(
				'<body',
				event.route.id === '/advanced-sveltekit/hooks/handle'
					? '<body style="color: hotpink !important;'
					: '<body'
			);
		}
	});
}

// eslint-disable-next-line
export async function handleFetch({ event, request, fetch }) {
	const url = new URL(request.url);
	if (url.pathname === '/advanced-sveltekit/hooks/handlefetch/a') {
		return await fetch('/advanced-sveltekit/hooks/handlefetch/b');
	}

	return await fetch(request);
}

// eslint-disable-next-line
export function handleError({ event, error }) {
	// @ts-expect-error zzz
	console.error(error?.stack);

	return {
		message: 'everything is fine',
		code: 'JEREMYBEARIMY'
	};
}
