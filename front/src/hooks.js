import * as cookie from 'cookie';
import { connectToDatabase } from '$lib/db';

// Sets context in endpoints
// Try console logging context in your endpoints' HTTP methods to understand the structure
export const handle = async ({ request, resolve }) => {
    // Connecting to DB
    // All database code can only run inside async functions as it uses await
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;

    // Getting cookies from request headers - all requests have cookies on them
    const cookies = cookie.parse(request.headers.cookie || '');
    request.locals.user = cookies;

    // If there are no cookies, the user is not authenticated
    if (!cookies.session_id) {
        request.locals.user.authenticated = false;
    }

    // Searching DB for the user with the right cookie
    // All database code can only run inside async functions as it uses await
    const userSession = await db.collection('cookies').findOne({ cookieId: cookies.session_id });

    // If there is that user, authenticate him and pass his email to context
    if (userSession) {
        request.locals.user.authenticated = true;
        request.locals.user.email = userSession.email;
    } else {
        request.locals.user.authenticated = false;
    }

    const response = await resolve(request);

    return {
        ...response,
        headers: {
            ...response.headers
            // You can add custom headers here
            // 'x-custom-header': 'potato'
        }
    };
};

// Sets session on client-side
// try console logging session in routes' load({ session }) functions
export const getSession = async (request) => {
    // Pass cookie with authenticated & email properties to session
    return request.locals.user
        ? {
                user: {
                    authenticated: true,
                    email: request.locals.user.email
                }
          }
        : {};
};