import { HeaderProps } from '@/models/common';
import { Box } from '@mui/material';
import React from 'react';

const HeaderMobile: React.FC<HeaderProps> = (props: HeaderProps) => {
	return (
		<Box component="header" textAlign="center" display={{ xs: 'block', md: 'none' }}>
			HeaderMobile
		</Box>
	);
};

export default HeaderMobile;
