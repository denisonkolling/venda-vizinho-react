import { Col, Container, Row } from 'react-bootstrap';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { products } from '../data/constants';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<>
			<Header />
			<Container>
				<h2 className="mt-3">Anúncios</h2>

				<Row md={3} xs={1} lg={4} className="mt-4 mb-4">
					{products.map((product) => (
						<Col key={product._id}>
							<ProductCard product={product} />
						</Col>
					))}
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default trackWindowScroll(HomePage);
