<script lang="ts">
	import { navigating } from '$app/stores';

	let previous: typeof $navigating;
	let start: number | undefined;
	let end: number | null | undefined;

	$: if ($navigating) {
		start = Date.now();
		end = null;
		previous = $navigating;
	} else {
		end = Date.now();
	}
</script>

<nav>
	<a href="/advanced-sveltekit/link-options/preloading">home</a>
	<a href="/advanced-sveltekit/link-options/preloading/slow-a" data-sveltekit-preload-data="off"
		>slow-a</a
	>
	<a href="/advanced-sveltekit/link-options/preloading/slow-b" data-sveltekit-preload-data="off"
		>slow-b</a
	>
</nav>

<slot />

{#if previous && start && end}
	<p>
		navigated from {previous.from?.url.pathname} to {previous.to?.url.pathname} in
		<strong>{end - start}ms</strong>
	</p>
{/if}
