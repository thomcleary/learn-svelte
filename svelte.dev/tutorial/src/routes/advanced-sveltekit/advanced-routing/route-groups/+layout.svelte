<script>
	const href = '/advanced-sveltekit/advanced-routing/route-groups';
</script>

<nav>
	<a {href}>home</a>
	<a href={`${href}/about`}>about</a>
	<a href={`${href}/account`}>account</a>
	<a href={`${href}/app`}>app</a>
</nav>

<slot />
