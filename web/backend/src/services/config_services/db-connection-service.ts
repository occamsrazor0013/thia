/**
 * Setup DB connection via mongoose (cause low-level mongodb sucks)
 */

import mongoose from 'mongoose';

const dbURI =
	'mongodb+srv://ritesh:Hv9xKyrk@backend-cluster.2rhkh.mongodb.net/MAIN?retryWrites=true&w=majority';

export let db: null | mongoose.Connection = null;
export const setupDB = () => {
	// See https://mongoosejs.com/docs/
	mongoose.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		readPreference: 'nearest',
	});
	db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
		// we're connected, initialize schemas
		console.log('⚡ DB Connected');
	});
};
