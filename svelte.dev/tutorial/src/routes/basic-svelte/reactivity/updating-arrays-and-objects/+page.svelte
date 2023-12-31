<script>
	let numbers = [1, 2, 3, 4];

	function addNumberWithSpreadSyntax() {
		numbers = [...numbers, numbers.length + 1];
	}

	function addNumberWithPropertyAssignment() {
		numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

	let obj = { prop: 1 };

	function addOneToProp() {
		obj.prop += 1;
	}
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumberWithSpreadSyntax}> Add a number (with spread syntax)</button>
<button on:click={addNumberWithPropertyAssignment}> Add a number (with property assignment)</button>

<p>{'{'} prop: {obj.prop} {'}'}</p>
<button on:click={addOneToProp}>Add one to prop (with property assignment)</button>
