import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	console.log('todos:', db.getTodos(id));

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const userid = cookies.get('userid');
		const todo = data.get('description');
		userid && todo && db.createTodo(userid, todo.toString());
	}
};
