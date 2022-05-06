/**
 * The shape that we want the request body to take for
 * the /addUser route
 */
export interface AddUserReqBody {
	name: string;
	email: string;
	token: string;
	emailVerified: boolean;
	photoURL?: string;
	phone?: string | null;
}
