const database = new Map<string, Map<string, { id: string; description: string; done: boolean }>>();

export function getTodos(userid: string) {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}

	return Array.from(database.get(userid)?.values() ?? []);
}

export function createTodo({ userid, description }: { userid: string; description: string }) {
	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	const todos = database.get(userid)!;

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	});

	return {
		id
	};
}

export function toggleTodo({ userid, id, done }: { userid: string; id: string; done: boolean }) {
	const todos = database.get(userid);
	const todo = todos?.get(id);

	if (todo) {
		todo.done = done;
	}
}

export function deleteTodo({ userid, id }: { userid: string; id: string }) {
	const todos = database.get(userid);
	todos && todos.delete(id);
}
