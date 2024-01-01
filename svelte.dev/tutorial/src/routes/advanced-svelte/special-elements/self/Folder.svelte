<script>
	import File from './File.svelte';

	export let expanded = false;
	export let name;
	export let files;

	function toggle() {
		expanded = !expanded;
	}
</script>

<button on:click={toggle} style:padding="0">{expanded ? '📂' : '📁'} {name}</button>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.files}
					<svelte:self {...file} />
				{:else}
					<File {...file} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	button {
		padding: 0 0 0 1.5em;
		background-size: 1em 1em;
		background-color: transparent;
		color: var(--fg-1);
		font-weight: bold;
		cursor: pointer;
		border: none;
		margin: 0;
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid rgba(128, 128, 128, 0.4);
	}

	li {
		padding: 0.2em 0;
	}
</style>
