// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map<string, { id: string; description: string; done: boolean }[]>();

export function getTodos(userid: string) {
	if (!db.get(userid)) {
		db.set(userid, [
			{
				id: crypto.randomUUID(),
				description: 'Learn SvelteKit',
				done: false
			}
		]);
	}

	return db.get(userid) ?? [];
}

export function createTodo(userid: string, description: string) {
	if (description === '') {
		throw new Error('todo must have a description');
	}

	const todos = db.get(userid);

	if (todos?.find((todo) => todo.description === description)) {
		throw new Error('todos must be unique');
	}

	todos &&
		todos.push({
			id: crypto.randomUUID(),
			description,
			done: false
		});
}

export function deleteTodo(userid: string, todoid: string) {
	const todos = db.get(userid);
	const index = todos?.findIndex((todo) => todo.id === todoid) ?? -1;

	if (todos && index !== -1) {
		todos.splice(index, 1);
	}
}
