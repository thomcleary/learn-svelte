<script>
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<!-- 
The list of properties you can bind to is as follows:
innerWidth
innerHeight
outerWidth
outerHeight
scrollX
scrollY
online — an alias for window.navigator.onLine
All except scrollX and scrollY are readonly. 
-->

<div id="mock-body">
	<span on:click={() => (y += 100)}>depth: {y}px</span>
</div>

<style>
	#mock-body {
		height: 400vw;
		background: url(./deepsea.webp);
		background-size: cover;
	}

	span {
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	}
</style>
