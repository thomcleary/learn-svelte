<script lang="ts">
	import type { ComponentEvents } from 'svelte';
	import Inner from './Inner.svelte';

	function handleMessage(event: ComponentEvents<Inner>['message']) {
		alert(event.detail.text);
	}
</script>

<Inner on:message={handleMessage} />
