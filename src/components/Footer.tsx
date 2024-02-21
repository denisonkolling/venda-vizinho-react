import { Button, Form } from 'react-bootstrap';

const Footer = () => {
	return (
		<>
			<footer
				className="text-center text-white"
				style={{ backgroundColor: '#5269b3' }}>
				<div className="container pt-4">
					<section className="">
						<form action="">
							<div className="row d-flex justify-content-center">
								<div className="col-auto">
									<div className="pt-2">
										<Form.Text className="text-white">
											Receba nossas ofertas e novidades.
										</Form.Text>
									</div>
								</div>

								<div className="col-md-5 col-12">
									<Form.Control
										type="email"
										placeholder="Digite seu email..."></Form.Control>
								</div>

								<div className="col-auto">
									<Button type="submit" variant="light">
										Enviar
									</Button>
								</div>
							</div>
						</form>
					</section>
				</div>

				<div className="text-center p-3">
					<span>
						© 2024 Venda de Vizinho Ltda. Todos os direitos reservados.
					</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
