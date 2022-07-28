import { MainLayout } from '@/components/index';
import { useProduct } from '@/hooks/useProduct';
import { Box, Container, Grid, Typography } from '@mui/material';

const ProductPage = () => {
	const { products, error } = useProduct();
	console.log('📢[index.tsx:9]: ', { products, error });

	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					bgcolor: 'primary.main',
					textAlign: 'center',
				}}
			>
				{products?.length ? (
					<>
						<Typography variant="h2">Product List</Typography>
						<Grid container sx={{ display: 'flex', gap: '0px' }}>
							{products?.map((product) => {
								return (
									<Grid item key={product.id} xs={3} sx={{ border: '1px solid black' }}>
										<Typography variant="h3">{product.name}</Typography>
										{product.image && (
											<img src={product.image.url} alt={product.name} style={{ width: '230px' }} />
										)}
										<Typography variant="subtitle1">{product.description}</Typography>
										<Typography variant="subtitle2">{product.category.name}</Typography>
										<Typography variant="body1">{product.price}</Typography>
									</Grid>
								);
							})}
						</Grid>
					</>
				) : (
					<Box>Loading...</Box>
				)}
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

ProductPage.Layout = MainLayout;

export default ProductPage;
