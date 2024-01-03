<script>
	const href = '/advanced-sveltekit/hooks/handleerror';
</script>

<nav>
	<a {href}>home</a>
	<a href={`${href}/the-good-place`}>the good place</a>
	<a href={`${href}/the-bad-place`}>the bad place</a>
</nav>

<slot />
