export async function getRandomNumber() {
	// Fetch a random number between 0 and 100
	// (with a delay, so that we can see it)
	// const res = await fetch('http://www.randomnumberapi.com/api/v1.0/random');

	await new Promise((resolve) => setTimeout(resolve, 2000));

	const res: Response = await new Promise((resolve) =>
		resolve(
			new Response((Math.random() * 100).toString(), { status: Math.random() > 0.5 ? 200 : 400 })
		)
	);

	if (res.ok) {
		return await res.text();
	} else {
		// Sometimes the API will fail!
		throw new Error('Request failed');
	}
}
