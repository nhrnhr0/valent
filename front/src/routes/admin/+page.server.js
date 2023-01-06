import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    if (locals.user.authenticated) {
    } else {
        throw error(401, 'Not authenticated');
    }
}