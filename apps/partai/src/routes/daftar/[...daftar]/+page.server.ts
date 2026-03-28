import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const { userId } = await event.locals.auth();
	if (userId) redirect(302, '/');
};
