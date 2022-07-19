import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface IAuthProps {
	children: ReactElement | ReactNode | JSX.Element;
}

const Auth: React.FC<IAuthProps> = ({ children }: IAuthProps) => {
	const { profile, firstLoading } = useAuth({
		revalidateOnMount: true,
	});

	const router = useRouter();

	useEffect(() => {
		if (!firstLoading && !profile) {
			router.push('/login');
		}
	}, [router, profile, firstLoading]);

	if (!profile) {
		return <p>Loading...</p>;
	}

	return <div>{children}</div>;
};

export default Auth;
