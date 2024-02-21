import { Card } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import { formatCurrencry } from '../utils/helpers';
import { ReviewTypes } from '../utils/interfaces';
import ImageLazy from './LazyImage';

export type Product = {
	_id: number | string;
	name: string;
	price: number;
	image: string;
	category: string;
	brand: string;
	description: string;
	qty: number;
	createdAt: Date;
	reviews: ReviewTypes[];
};

type Props = {
	product: Product;
};

const ProductCard = ({ product }: Props) => {
	return (
		<Card
			className="my-3 p-3 rounded"
			style={{
				height: '390px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<ImageLazy
				imageUrl={product.image}
				style={{
					height: '260px',
					width: '250px',
					objectFit: 'cover',
				}}
			/>
			<Card.Body style={{ textAlign: 'center' }}>
				<Card.Title className=""></Card.Title>
				<h6>{product.name}</h6>
				<br />
				<p>{formatCurrencry(product.price)}</p>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
