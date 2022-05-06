/**
 * File that gets run
 */

import { Server, IServer } from './Server';

let server: IServer;

server = new Server();
server.start(8000);
