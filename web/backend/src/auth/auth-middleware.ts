/**
 * Authentication middleware to secure a route that requires
 * users to be authenticated to access
 */

import { Request, Response, NextFunction } from 'express';

import firebaseAdmin from '../services/config_services/firebase-service';

interface AuthRequest extends Request {
	token: string;
	uid: string;
}

/**
 * Set token of request object from authorization header
 * @param req Request
 * @param res Response (not used)
 * @param next Next function
 */
const getAuthToken = (req: AuthRequest, next: NextFunction) => {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		req.token = req.headers.authorization.split(' ')[1];
	} else {
		req.token = '';
	}

	next();
};

/**
 * Verify token using firebase-admin sdk and add uid to request object
 * if user exists and is authenticated
 * @param req Request
 * @param res Response
 * @param next Next function
 */
export const checkIfAuthenticated = (req: AuthRequest | any, res: Response, next: NextFunction) => {
	getAuthToken(req, async () => {
		try {
			const { token } = req;
			const userInfo = await firebaseAdmin.auth().verifyIdToken(token);
			req.uid = userInfo.uid;
			return next();
		} catch (e) {
			console.log('Failed Authentication');
			return res.status(401).send({ error: 'You are not authorized to make this request' });
		}
	});
};
