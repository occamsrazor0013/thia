import { Server as SV } from '@overnightjs/core';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import { setupDB } from './services/config_services/db-connection-service';
import { AuthController } from './controller/AuthController';

export abstract class IServer extends SV {
	abstract start(port: number): void;
}

/**
 * Overnight Server
 */
export class Server extends IServer {
	constructor() {
		super();

		setupDB();

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(
			cors({
				optionsSuccessStatus: 200,
			}),
		);
		let authController = new AuthController();

		super.addControllers([authController]);
	}

	public start(port: number) {
		this.app.listen(port, () => {
			console.log(`⚡ Server started on port ${port}`);
		});
	}
}
