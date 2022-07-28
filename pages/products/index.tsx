import { MainLayout } from '@/components/index';
import { useProduct } from '@/hooks/useProduct';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const ProductPage = () => {
	const { products, error } = useProduct();
	console.log('📢[index.tsx:9]: ', { products, error });

	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					textAlign: 'center',
				}}
			>
				{products?.length ? (
					<>
						<Typography variant="h2">Product List</Typography>
						<Grid container sx={{ display: 'flex', gap: '0px' }}>
							{products?.map((product) => {
								return (
									<Grid
										item
										key={product.id}
										xs={12}
										sm={4}
										md={4}
										lg={3}
										sx={{ padding: '16px 8px' }}
									>
										<Box sx={{ border: '1px solid black' }}>
											<Typography variant="h3">{product.name}</Typography>
											{product.image ? (
												<Image
													src={product.image.url}
													alt={product.name}
													layout="responsive"
													width={230}
													height={300}
													objectFit={'cover'}
												/>
											) : (
												<Image
													src={
														'https://images.unsplash.com/photo-1658869402195-9f0ea192ecd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
													}
													alt="default-image-product"
													layout="responsive"
													width={230}
													height={300}
													objectFit={'cover'}
												/>
											)}
											<Typography variant="subtitle1">{product.description}</Typography>
											<Typography variant="subtitle2">{product.category.name}</Typography>
											<Typography variant="body1">{product.price}</Typography>
										</Box>
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
