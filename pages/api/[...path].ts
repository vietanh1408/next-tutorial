import { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

export const config = {
	api: {
		bodyParser: false,
	},
};

const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	return new Promise((resolve) => {
		// convert cookies to header Authorization
		const cookies = new Cookies(req, res);

		const accessToken = cookies.get('access_token');
		console.log('📢[[...path].ts:18]: ', accessToken);

		if (accessToken) {
			req.headers.Authorization = `Bearer ${accessToken}`;
		}

		req.headers.cookie = '';

		proxy.web(req, res, {
			target: process.env.NEXT_PUBLIC_API_URL,
			changeOrigin: true,
			selfHandleResponse: false,
		});

		proxy.once('proxyRes', () => {
			resolve(true);
		});
	});
}
