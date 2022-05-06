import { FilterQuery, QueryOptions } from 'mongoose';

import { UserModel, UserDocument, IUser } from '../../models/user.model';

// Some services regarding a user

/**
 * Add a user's info into DB
 * @param input User input data
 * @returns User document promise
 */
export const createUser = async (input: IUser) => {
	return UserModel.create<IUser>(input);
};

/**
 * Search for a user
 * @param query UserDocument with field(s) filled in
 * @param options Options to accompany the query
 * @returns UserDocument representing the User
 */
export const findUser = async (
	query: FilterQuery<UserDocument>,
	options: QueryOptions = { lean: true },
) => {
	return UserModel.findOne(query, null, options);
};
