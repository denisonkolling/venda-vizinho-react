import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	NavbarBrand,
} from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { FaHeart, FaUser, FaBagShopping } from 'react-icons/fa6';

const Header = () => {
	return (
		<>
			<Navbar expand="lg" className="" style={{ backgroundColor: '#7952B3'}}>
				<Container className="container-fluid justify-content-center" style={{letterSpacing: 'px',}}>
					<NavbarBrand>
						<img src={logo} alt="" width="60" height="37" className="ms-5" />
					</NavbarBrand>
					<Navbar.Brand href="#home" className='text-white fw-bold' style={{letterSpacing: '1px',}}>Venda de Vizinho</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home" className='text-white fw-medium'>Home</Nav.Link>
							<Nav.Link href="#link" className='text-white fw-medium'>Produtos</Nav.Link>
							<Nav.Link href="#link" className='text-white fw-medium'>Categorias</Nav.Link>
							<Nav.Link href="#link" className='text-white fw-medium'>Ofertas</Nav.Link>
							{/* <NavDropdown title="Contato" className='text-white' id="basic-nav-dropdown" style={{ backgroundColor: 'white', borderRadius: '10px'}}>
								<NavDropdown.Item href="#action/3.1" className='text-white'>Contato</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2" className='text-white'>Email</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3" className='text-white'>WhatsApp</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.4" className='text-white'>Telefone</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
					<div className="d-flex me-5">
						<a className="text-reset m-3">
							<span>
								<FaHeart className='text-white'/>
							</span>
						</a>
						<a className="text-reset m-3">
							<span>
								<FaBagShopping className='text-white'/>
							</span>
						</a>
						<a className="text-reset m-3">
							<span>
								<FaUser className='text-white'/>
							</span>
						</a>
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
