<script>
	const href = '/basic-sveltekit/shared-modules/the-$lib-alias';
</script>

<nav>
	<a {href}>home</a>
	<a href={`${href}/a/deeply/nested/route`}>a deeply nested route</a>
</nav>

<slot />
