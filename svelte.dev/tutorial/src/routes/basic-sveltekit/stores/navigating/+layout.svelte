<script>
	import { page, navigating } from '$app/stores';
</script>

<nav>
	<a
		href="/basic-sveltekit/stores/navigating"
		aria-current={$page.url.pathname === '/basic-sveltekit/stores/navigating'}
	>
		home
	</a>

	<a
		href="/basic-sveltekit/stores/navigating/about"
		aria-current={$page.url.pathname === '/basic-sveltekit/stores/page/navigating/about'}
	>
		about
	</a>

	{#if $navigating?.to}
		navigating to {$navigating.to.url.pathname}
	{/if}
</nav>

<slot />
