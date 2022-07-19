import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '@/hooks';

const LoginPage: React.FC = () => {
	const router = useRouter();

	const { login, logout, profile, firstLoading } = useAuth({
		revalidateOnMount: true,
	});

	const handleLogin = async () => {
		try {
			await login({
				username: 'vietanh1408',
				password: 'vietanh1408',
			});

			router.push('/');
		} catch (error) {
			console.log('login error: ', error);
		}
	};

	const handleLogOut = async () => {
		await logout();
	};

	useEffect(() => {
		if (profile) {
			router.push('/');
		}
	}, [router, profile, firstLoading]);

	return (
		<div>
			<h1>Login page</h1>

			{profile ? <div>{profile?.username}</div> : <></>}

			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogOut}>Log Out</button>
		</div>
	);
};

export default LoginPage;
