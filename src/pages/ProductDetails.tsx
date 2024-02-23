import React, { useEffect, useState } from 'react';
import {	Button,	Card,	Col,	Container,	Form,	ListGroup,	Row,} from 'react-bootstrap';
import { FaCreditCard } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { formatCurrencry, getDate } from '../utils/helpers';
import ImageLazy from '../components/LazyImage';
import { products } from '../data/constants';
import { Product } from '../components/ProductCard';
import Rating from '../components/Rating';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ProductDetails = () => {
	const [product, setProduct] = useState<Product>();
	const params = useParams<{ id?: string }>();
	const navigate = useNavigate();	

	useEffect(() => {
    if (params.id !== undefined) {
      const productId = parseInt(params.id);
      const selectedProduct = products.find(product => product._id === productId);
      if (selectedProduct) {
        setProduct(selectedProduct);
        window.scrollTo(0, 0);
      } else {
        navigate('/not-found');
      }
    }
  }, [params.id, navigate]);

	const onAdd = () => {
		navigate('/cart');
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<Header />
			<Container title={product?.name}>
				<Container>
					<Row>
						<Col md={8}>
							<Card className="mt-2">
								<div className="d-flex justify-content-center">
									<ImageLazy
										imageUrl={product?.image}
										style={{
											width: '500px',
											height: '480px',
											objectFit: 'cover',
										}}
										className="p-2 align-self-center"
									/>
								</div>
							</Card>
						</Col>
						<Col md={4}>
							<ListGroup
								variant="flush"
								className="shadow p-4 bg-white rounded my-2">
								<ListGroup.Item>
									<h2>{product?.name}</h2>
								</ListGroup.Item>
								<ListGroup.Item>
									{' '}
									<h5 className=" d-flex justify-content-between align-items-center">
										<span>Preço</span>
										<span>{product && formatCurrencry(product.price)}</span>
									</h5>
								</ListGroup.Item>

								<ListGroup.Item>
									<h5 className=" d-flex justify-content-between align-items-center">
										<span>Categoria</span>
										<span>{product?.category}</span>
									</h5>
								</ListGroup.Item>
								<ListGroup.Item>
									<h5 className=" d-flex justify-content-between align-items-center">
										<span>Marca</span>
										<span>{product?.brand}</span>
									</h5>
								</ListGroup.Item>
								<ListGroup.Item className='text-center fs-6 fw-medium'>
									Em 3 x de {product && formatCurrencry(product.price / 3)}{' '}
									<FaCreditCard />
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										onClick={onAdd}
										className="w-100 my-2 fw-medium p-2 fs-5"
										style={{
											backgroundColor: '#5269b3',
											color: '#fff',
											border: 'none',
										}}>
										Comprar
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row className="my-2">
						<Col md={8}>
							<Card>
								<Card.Body>
									<h3 style={{ color: '#5269b3' }}>Descrição</h3>
									<ListGroup variant="flush">
										<ListGroup.Item>
											<div className="d-flex">
												<p>{product?.description}</p>
											</div>
										</ListGroup.Item>
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className="my-2">
						<Col md={8}>
							<Card>
								<Card.Body>
									<h3 style={{ color: '#5269b3' }}>Avaliação dos clientes</h3>
									<ListGroup variant="flush">
										{product?.reviews.map((review) => (
											<ListGroup.Item key={review._id}>
												<div className="d-flex">
													<strong>{review.name}</strong>
													<Rating value={review.rating} />
													<p>{getDate(review.createdAt)}</p>
												</div>
												<p>{review.comment}</p>
											</ListGroup.Item>
										))}
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className="my-2">
						<Col md={8}>
							<ListGroup className="bg-white">
								<ListGroup.Item>
									<h3 style={{ color: '#5269b3' }}>Avalie o produto</h3>

									<Form onSubmit={onSubmit}>
										<Form.Group controlId="rating">
											<Form.Label>Avaliação</Form.Label>
											<Form.Control
												required
												// onChange={(e: any) => setRating(e.target.value)}
												as="select">
												<option value={1}>⭐</option>
												<option value={2}>⭐⭐</option>
												<option value={3}>⭐⭐⭐</option>
												<option value={4}>⭐⭐⭐⭐</option>
												<option value={5}>⭐⭐⭐⭐⭐</option>
											</Form.Control>
										</Form.Group>
										<Form.Group controlId="comment">
											<Form.Label>Comentário</Form.Label>
											<Form.Control
												required
												// onChange={(e) => setComment(e.target.value)}
												as={'textarea'}
												rows={3}
											/>
										</Form.Group>
										<Button
											style={{ backgroundColor: '#5269b3', color: '#fff' }}
											className="mt-2 w-full"
											variant="outline-none"
											type="submit">
											Enviar
										</Button>
									</Form>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Container>
			</Container>
			<Footer />
		</>
	);
};

export default ProductDetails;
