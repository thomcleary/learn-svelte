import { json } from '@sveltejs/kit';
import * as database from '../database';

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const userid = cookies.get('userid') ?? '';
	const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}
