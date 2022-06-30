import { LayoutProps } from '@/models/index';
import React from 'react';
import { Container, Stack } from '@mui/material';
import Header from '../common/header';
import Footer from '../common/footer';
import { Box } from '@mui/system';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />
			<Box component="main" flexGrow={1}>
				{children}
			</Box>
			<Footer />
		</Stack>
	);
}
