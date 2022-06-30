import React from 'react';
import FooterDesktop from './footer-desktop';
import FooterMobile from './footer-mobile';

const Footer: React.FC = () => {
	return (
		<>
			<FooterDesktop />
			<FooterMobile />
		</>
	);
};

export default Footer;
