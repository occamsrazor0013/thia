import { Response, Request as RQ } from 'express';
import { is } from 'typescript-is';
import { Controller, Middleware, Get, Post } from '@overnightjs/core';

import { createUser } from '../services/db_services/user.service';
import { checkIfAuthenticated } from '../auth/auth-middleware';
import { AddUserReqBody } from './types/AuthControllerTypes';
import { Request } from '../helpers/controller_helpers';

/**
 * Controller related to authentication related routes
 */
@Controller('auth')
export class AuthController {
	@Post('addUser')
	@Middleware([checkIfAuthenticated])
	private async addUser(req: Request<AddUserReqBody>, res: Response) {
		if (!is<AddUserReqBody>(req.body)) {
			return res.status(400).json({ error: 'Invalid Request Body' });
		}
		const { name, email, emailVerified, photoURL, phone } = req.body;
		try {
			const doc = await createUser({
				name,
				email,
				uid: req.uid === undefined ? '' : req.uid,
				emailVerified,
				photoURL: photoURL === undefined ? 'N/A' : photoURL,
				phone: phone === undefined ? null : phone,
			});
			return res.status(200).json(doc);
		} catch (error) {
			return res.status(503).json({ error: 'Could Not Store User to DB' });
		}
	}
}
