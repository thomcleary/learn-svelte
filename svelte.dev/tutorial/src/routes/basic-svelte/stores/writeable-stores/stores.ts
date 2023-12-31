import { writable } from 'svelte/store';

export type Count = Parameters<Parameters<(typeof count)['subscribe']>[0]>[0];

export const count = writable(0);
