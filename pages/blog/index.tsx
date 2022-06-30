import React from 'react';
import { MainLayout } from '@/components/index';
import { Container } from '@mui/material';

const BogPage = () => {
	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					bgcolor: 'primary.main',
					textAlign: 'center',
				}}
			>
				Block SM
			</Container>
			<Container
				maxWidth="xl"
				sx={{ bgcolor: 'primary.main', border: '1px solid black', textAlign: 'center' }}
			>
				Block MD
			</Container>
		</>
	);
};

BogPage.Layout = MainLayout;

export default BogPage;
