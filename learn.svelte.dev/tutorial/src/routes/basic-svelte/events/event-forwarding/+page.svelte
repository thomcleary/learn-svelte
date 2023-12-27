<script lang="ts">
	import type { ComponentEvents } from 'svelte';
	import Outer from './Outer.svelte';

	function handleMessage(event: ComponentEvents<Outer>['message']) {
		alert(event.detail.text);
	}
</script>

<Outer on:message={handleMessage} />
