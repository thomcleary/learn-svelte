import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200),

	// eslint-disable-next-line
	fallback(node, params) {
		console.log('fallback');
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => {
				console.log({ t });
				return `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`;
			}
		};
	}
});
