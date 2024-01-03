<script>
	const href = '/advanced-sveltekit/page-options/trailingslash';
</script>

<nav>
	<a href={`${href}/always`}>/always</a>
	<a href={`${href}/always/`}>/always/</a>
	<a href={`${href}/ignore`}>/ignore</a>
	<a href={`${href}/ignore/`}>/ignore/</a>
	<a href={`${href}/never`}>/never</a>
	<a href={`${href}/never/`}>/never/</a>
</nav>

<slot />
