import * as db from '$lib/server/database.js';
import { fail } from '@sveltejs/kit';

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
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const data = await request.formData();

		const userId = cookies.get('userid');
		const todo = data.get('description');

		try {
			userId && todo && db.createTodo(userId, todo.toString());
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: (error as Error).message
			});
		}

		return {
			message: 'Successfully created'
		};
	},

	delete: async ({ cookies, request }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const data = await request.formData();

		const userId = cookies.get('userid');
		const todoId = data.get('id');

		userId && todoId && db.deleteTodo(userId, todoId.toString());

		return {
			message: 'Successfully deleted'
		};
	}
};
