import { HeaderProps } from '@/models/common';
import { Box } from '@mui/material';
import React from 'react';

const HeaderDesktop: React.FC<HeaderProps> = (props: HeaderProps) => {
	return (
		<Box component="header" textAlign="center" display={{ xs: 'none', md: 'block' }}>
			HeaderDesktop
		</Box>
	);
};

export default HeaderDesktop;
