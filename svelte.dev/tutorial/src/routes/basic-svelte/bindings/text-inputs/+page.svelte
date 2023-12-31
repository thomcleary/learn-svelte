<script>
	let name = 'world';
</script>

<input bind:value={name} />
<!-- Equivalent to: <input on:input={(e) => (name = e.currentTarget.value)} value={name} /> -->

<h1>Hello {name}!</h1>
