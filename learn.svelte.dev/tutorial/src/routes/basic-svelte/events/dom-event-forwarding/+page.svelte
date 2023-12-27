<script lang="ts">
	import { onMount } from 'svelte';
	import BigRedButton from './BigRedButton.svelte';
	import horn from './horn.mp3';

	let audio: HTMLAudioElement;

	// Audio only available in the Browser
	onMount(() => {
		audio = new Audio();
		audio.src = horn;
	});

	async function handleClick() {
		audio.load();
		audio.play();
	}
</script>

<BigRedButton on:click={handleClick} />
