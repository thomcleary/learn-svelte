<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}

	$: console.log(`The count is ${count}`);

	$: {
		console.log(`The count doubled is ${count * 2}`);
		console.log('This will also be logged whenever the count changes');
	}

	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 0;
	}
</script>

<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
