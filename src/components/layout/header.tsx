import { HeaderProps } from '@/models/common';
import { Box } from '@mui/material';
import React from 'react';

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
	return <Box component="header">Header</Box>;
};

export default Header;
