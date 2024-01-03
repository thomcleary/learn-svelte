<script>
	const href = '/basic-sveltekit/errors-and-redirects/basics';
</script>

<nav>
	<a {href}>home</a>
	<a href={`${href}/expected`}>page with expected error</a>
	<a href={`${href}/unexpected`}>page with unexpected error</a>
</nav>

<slot />
