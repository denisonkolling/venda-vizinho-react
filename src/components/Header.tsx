import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import { FaHeart, FaUser, FaBagShopping } from 'react-icons/fa6';

const Header = () => {
	return (
		<>
			<Navbar expand="lg" className="" style={{ backgroundColor: '#5269b3' }}>
				<Container
					className="container-fluid justify-content-center"
					style={{ letterSpacing: '0.5px' }}>
					<NavbarBrand>
						<img src={logo} alt="" width="60" height="37"/>
					</NavbarBrand>
					<Navbar.Brand
						href="/home"
						className="text-white fw-bold"
						style={{ letterSpacing: '1px' }}>
						Venda de Vizinho
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/home" className="text-white fw-medium">
								Home
							</Nav.Link>
							<Nav.Link href="/produtos" className="text-white fw-medium">
								Produtos
							</Nav.Link>
							<Nav.Link href="/categorias" className="text-white fw-medium">
								Categorias
							</Nav.Link>
							<Nav.Link href="/ofertas" className="text-white fw-medium">
								Ofertas
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<div className="d-flex">
						<Nav.Link className="text-reset m-3">
							<FaHeart className="text-white" />
						</Nav.Link>
						<Nav.Link className="text-reset m-3">
							<FaBagShopping className="text-white" />
						</Nav.Link>
						<Nav.Link className="text-reset m-3">
							<FaUser className="text-white" />
						</Nav.Link>
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
