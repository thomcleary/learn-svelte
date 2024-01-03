<script>
	import { page, navigating, updated } from '$app/stores';
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

{#if $updated}
	<div class="toast">
		<p>
			A new version of the app is available

			<button on:click={() => location.reload()}> reload the page </button>
		</p>
	</div>
{:else}
	<div class="toast">
		<p>You are using the latest version of the app</p>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.toast p {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--bg-2);
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		border-radius: 4px;
	}
</style>
