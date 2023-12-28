<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut, cubicIn } from 'svelte/easing';

	const progress = tweened(0, {
		// delay: 400,
		duration: 400,
		easing: cubicOut
		// interpolate: (start, end) => (time) => value between start and end for the given time
	});

	$: console.log('progress:', $progress);
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0, { duration: 1000 })}> 0% </button>

<button on:click={() => progress.set(0.25)}> 25% </button>

<button on:click={() => progress.set(0.5, { easing: cubicIn })}> 50% </button>

<button on:click={() => progress.set(0.75)}> 75% </button>

<button on:click={() => progress.set(1, { delay: 200 })}> 100% </button>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>
