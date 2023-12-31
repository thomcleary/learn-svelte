<script>
	let html = '<span>Write some <b>innerHTML!</b></span>';
	let textContent = '<span>Write some <b>textContent!</b></span>';
</script>

<div bind:innerHTML={html} contenteditable />
<div bind:textContent contenteditable />

<pre>innerHTML: {@html html}</pre>
<pre>textContent: {@html textContent}</pre>

<style>
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>
