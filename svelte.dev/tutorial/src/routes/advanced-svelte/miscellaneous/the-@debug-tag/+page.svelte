<script>
	let user = {
		firstname: 'Ada',
		lastname: 'Lovelace'
	};
</script>

{@debug user}

<label>
	<input bind:value={user.firstname} />
	first name
</label>

<label>
	<input bind:value={user.lastname} />
	last name
</label>

{(console.log(user), '')}

<h1>Hello {user.firstname}!</h1>
