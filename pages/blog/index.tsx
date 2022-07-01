import { MainLayout } from '@/components/index';
import { ProductActionType } from '@/redux/actions/product';
import { RootState, wrapper } from '@/redux/store';
import { Container } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useSelector } from 'react-redux';

interface BlogPageProps {
	products: any[];
}

const BlogPage = (props: BlogPageProps) => {
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

BlogPage.Layout = MainLayout;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
	(store) => async () => {
		store.dispatch({ type: ProductActionType.GET_ALL });

		const products = store.getState().product.list;

		return {
			props: {
				products,
			},
		};
	},
);

export default BlogPage;
