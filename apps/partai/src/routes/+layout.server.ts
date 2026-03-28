import { buildClerkProps } from 'svelte-clerk/server';

export const load = async (event) => {
	const auth = await event.locals.auth();
	return {
		...buildClerkProps(auth)
	};
};
