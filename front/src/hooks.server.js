import * as cookie from 'cookie';
import { connectToDatabase } from '$lib/db';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
        // Connecting to DB
    // All database code can only run inside async functions as it uses await
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
     // Getting cookies from request headers - all requests have cookies on them
    const cookies = event.cookies;
    event.locals.user = cookies;
    if (!cookies.get('session_id')  ) {
        event.locals.user.authenticated = false;
    }
    const userSession = await db.collection('cookies').findOne({ cookieId: cookies.get('session_id')});

    // If there is that user, authenticate him and pass his email to context
    if (userSession) {
        event.locals.user.authenticated = true;
        event.locals.user.email = userSession.email;
    } else {
        event.locals.user.authenticated = false;
        event.locals.user.email = '';
    }
    if(event.url.pathname.startsWith('/admin')
    && !event.locals.user.authenticated) {
      throw new Error('Not authenticated');
    }

  const response = await resolve(event);
  return response;
}