import axios from 'axios';

export const backend = axios.create({
	baseURL:
		process.env.NODE_ENV == 'development' ? 'http://localhost:8000' : 'https://website.com',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('@token')}`,
	},
	timeout: process.env.NODE_ENV == 'development' ? 0 : 20000,
});
