<script>
	import { onMount } from 'svelte';

	let seconds = 0;

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<nav data-sveltekit-reload>
	<a href="/advanced-sveltekit/link-options/reloading-the-page">home</a>
	<a href="/advanced-sveltekit/link-options/reloading-the-page/about">about</a>
</nav>

<slot />

<p>the page has been open for {seconds} seconds</p>
