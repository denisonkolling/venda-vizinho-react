import { trackWindowScroll } from 'react-lazy-load-image-component';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsList from '../components/ProductsList';

const HomePage = () => {
	return (
		<>
			<Header />
			<ProductsList />
			<Footer />
		</>
	);
};

export default trackWindowScroll(HomePage);
