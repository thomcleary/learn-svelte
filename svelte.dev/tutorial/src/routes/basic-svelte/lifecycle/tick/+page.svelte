<script lang="ts">
	import { tick } from 'svelte';

	let text = `Select some text and hit the tab key to toggle uppercase`;

	async function handleKeydown(event: KeyboardEvent & { currentTarget: HTMLTextAreaElement }) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = event.currentTarget;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		// this has no effect, because the DOM hasn't updated yet
		// this.selectionStart = selectionStart;
		// this.selectionEnd = selectionEnd;

		// Reference to node as currentTarget will become null after bubbling complete
		// (required to show the pause)
		const target = event.currentTarget;

		// Wait for state changes to be applied to the DOM
		// - value of <textarea> updates to updated value of `text` variable
		// - causes cursor to 'jump' to end of text in <textarea>
		await tick();

		// Pause to show where the cursor goes before setting selection again
		await ((ms: number) => new Promise((fulfil) => setTimeout(fulfil, ms)))(1000);

		target.selectionStart = selectionStart;
		target.selectionEnd = selectionEnd;
	}
</script>

<textarea value={text} on:keydown={handleKeydown} />

<style>
	textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>
