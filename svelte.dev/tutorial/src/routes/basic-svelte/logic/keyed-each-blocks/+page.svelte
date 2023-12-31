<script lang="ts">
	import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' } as const,
		{ id: 2, name: 'banana' } as const,
		{ id: 3, name: 'carrot' } as const,
		{ id: 4, name: 'doughnut' } as const,
		{ id: 5, name: 'egg' } as const
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}> Remove first thing </button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}
