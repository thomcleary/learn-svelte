<script>
	const href = '/basic-sveltekit/errors-and-redirects/redirects';
</script>

<nav>
	<a {href}>home</a>
	<a href={`${href}/a`}>a</a>
	<a href={`${href}/b`}>b</a>
</nav>

<slot />
