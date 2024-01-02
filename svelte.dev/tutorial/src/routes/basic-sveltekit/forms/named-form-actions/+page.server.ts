import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		const userId = cookies.get('userid');
		const todo = data.get('description');

		userId && todo && db.createTodo(userId, todo.toString());
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();

		const userId = cookies.get('userid');
		const todoId = data.get('id');

		userId && todoId && db.deleteTodo(userId, todoId.toString());
	}
};
