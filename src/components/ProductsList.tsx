import { Col, Container, Row } from 'react-bootstrap';
import { products } from '../data/constants';
import ProductCard from './ProductCard';

const ProductsList = () => {
	return (
		<>
			<Container>
				<h2 className="mt-3 text-center">Anúncios</h2>
				<Row md={3} xs={1} lg={4} className="mt-4 mb-4">
					{products.map((product) => (
						<Col key={product._id}>
							<ProductCard product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default ProductsList;
