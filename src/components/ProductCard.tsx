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

		// -----------------ALTERNATIVE-HTML---------------
		// <div
		// 	className="card m-2"
		// 	style={{
		// 		height: '290px',
		// 	}}>
		// 	<a href="">
		// 		<img className="card-img-top p-2" src={product.image} alt="..." style={{maxHeight: '190px', objectFit: 'cover',}} />
		// 	</a>
		// 	<div className="card-body">
		// 		<h6 className="text-capitalize">{product.name.toLowerCase()}</h6>
		// 		<h6>R$ {product.price}</h6>
		// 	</div>
		// </div>

		//TODO: Fix responsivness card component
		//TODO: Improve card images and text

		<Card
			className="my-3 p-3 rounded"
			style={{
				height: '390px',
				width: 'auto',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				overflow: 'hidden',
			}}>

			<ImageLazy
				imageUrl={product.image}
				style={{
					width: '100%',
					height: 'auto',
					maxHeight: '260px',
					objectFit: 'cover',
				}}
			/>
			
			<Card.Body style={{ textAlign: 'center' }}>
				<h6>{product.name}</h6>
				<br />
				<p>{formatCurrencry(product.price)}</p>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
