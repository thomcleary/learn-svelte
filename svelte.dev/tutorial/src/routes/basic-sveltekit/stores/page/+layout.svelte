<script>
	import { page } from '$app/stores';
</script>

<nav>
	<a
		href="/basic-sveltekit/stores/page"
		aria-current={$page.url.pathname === '/basic-sveltekit/stores/page'}
	>
		home
	</a>

	<a
		href="/basic-sveltekit/stores/page/about"
		aria-current={$page.url.pathname === '/basic-sveltekit/stores/page/about'}
	>
		about
	</a>
</nav>

<slot />
