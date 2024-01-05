// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message: string;
			code?: string;
		}
		interface Locals {
			answer: 42;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
