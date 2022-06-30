import { FooterProps } from '@/models/common';
import { Box } from '@mui/material';
import React from 'react';

const FooterDesktop: React.FC<FooterProps> = (props: FooterProps) => {
	return (
		<Box component="footer" textAlign="center" display={{ xs: 'none', md: 'block' }}>
			FooterDesktop
		</Box>
	);
};

export default FooterDesktop;
