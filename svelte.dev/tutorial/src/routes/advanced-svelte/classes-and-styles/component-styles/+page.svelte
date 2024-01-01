<script>
	import Box from './Box.svelte';

	let first = 'red';
	let second = 'green';
	let third = 'blue';

	const next = (colour) => (colour === 'red' ? 'green' : colour === 'green' ? 'blue' : 'red');
</script>

<div class="boxes">
	<Box --colour={first} on:click={() => (first = next(first))} />
	<Box --colour={second} on:click={() => (second = next(second))} />
	<Box --colour={third} on:click={() => (third = next(third))} />
</div>
