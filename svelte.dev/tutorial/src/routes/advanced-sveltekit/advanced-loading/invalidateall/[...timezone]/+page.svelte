<script>
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	onMount(() => {
		const interval = setInterval(() => {
			invalidate('data:now');
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	export let data;
</script>

<h1>
	{new Intl.DateTimeFormat([], {
		timeStyle: 'full',
		timeZone: data.timezone
	}).format(new Date(data.now))}
</h1>
