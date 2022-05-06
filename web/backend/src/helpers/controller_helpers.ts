import { Request as RQ } from 'express';

/**
 * Extends the **Request** interface from 'express' with an optional
 * token and uid parameter (for user auth) as well as strict type
 * definition for the body object
 */
export interface Request<T> extends RQ {
	body: T;
	token?: string;
	uid?: string;
}
