/**
 * User Mongoose Model definition
 */
import { Schema, model, Types, Document } from 'mongoose';

import { USER_COLLECTION } from '../constants/db_collection_constants';

export interface IUser {
	name: string;
	email: string;
	emailVerified: boolean;
	photoURL: string;
	uid: string;
	phone: string | null;
}

export interface UserDocument extends IUser, Document {
	// define any virtuals and/or methods
}

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	emailVerified: Boolean,
	photoURL: String,
	uid: { type: String, required: true, unique: true },
	phone: Schema.Types.Mixed,
});

export const UserModel = model<UserDocument>(USER_COLLECTION, userSchema);
