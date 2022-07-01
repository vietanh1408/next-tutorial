import { MainLayout } from '@/components/index';
import { getAll } from '@/redux/product/productSlice';
import { RootState, wrapper } from '@/redux/store';
import { Container } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

const BogPage = () => {
	const products = useSelector((state: RootState) => state.product.list);

	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					bgcolor: 'primary.main',
					textAlign: 'center',
				}}
			>
				Block SM {products.length}
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		store.dispatch(getAll());

		const products = store.getState().product.list;

		return {
			props: {
				products,
			},
		};
	},
);

export default BogPage;
