import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useEffect } from 'react';

interface IAuthProps {
	children: ReactElement | ReactNode | JSX.Element;
}

const Auth: React.FC<IAuthProps> = ({ children }: IAuthProps) => {
	const { profile, firstLoading }: { profile: any; firstLoading: boolean } = useAuth({
		revalidateOnMount: true,
	});

	const router = useRouter();

	useEffect(() => {
		if (!firstLoading && !profile?.user) {
			router.push('/login');
		}
	}, [router, profile, firstLoading]);

	if (!profile?.user) {
		return <p>Loading...</p>;
	}

	return <div>{children}</div>;
};

export default Auth;
