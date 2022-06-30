import { FooterProps } from '@/models/common';
import { Box } from '@mui/material';
import React from 'react';

const FooterMobile: React.FC<FooterProps> = (props: FooterProps) => {
	return (
		<Box component="footer" textAlign="center" display={{ xs: 'block', md: 'none' }}>
			FooterMobile
		</Box>
	);
};

export default FooterMobile;
