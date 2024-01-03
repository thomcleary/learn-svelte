// If this was the load function for the top most layout
// Then Sveltekit would fallback to showing the static error page at
// /src/error.html
export function load() {
	throw new Error('yikes');
}
