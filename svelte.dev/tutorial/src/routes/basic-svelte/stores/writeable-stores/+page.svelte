<script lang="ts">
	import { count, type Count } from './stores';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value: Count;

	count.subscribe((value) => {
		count_value = value;
	});
</script>

<h1>The count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />
