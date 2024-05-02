/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = ({ activeSection }) => {
	console.log(activeSection);
	const expand = 'lg';

	return (
		<Navbar key={expand} expand={expand} className='mb-3'>
			<Container fluid>
				<Navbar.Brand href='#' className='text-warning'>
					compleet labs
				</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${expand}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
					placement='end'
					style={{ backgroundColor: 'transparent' }}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className='justify-content-end flex-grow-1 pe-3 text-danger'>
							<Nav.Link
								href='#action2'
								className={
									activeSection === 'home' ? 'text-warning' : 'text-danger'
								}>
								Home
							</Nav.Link>
							<Nav.Link
								href='#action1'
								className={
									activeSection === 'services' ? 'text-warning' : 'text-danger'
								}>
								Services
							</Nav.Link>
							<Nav.Link
								href='#action1'
								className={
									activeSection === 'technology'
										? 'text-warning'
										: 'text-danger'
								}>
								Technology
							</Nav.Link>
							<Nav.Link
								href='#action1'
								className={
									activeSection === 'case studies'
										? 'text-warning'
										: 'text-danger'
								}>
								Case studies
							</Nav.Link>
							<Nav.Link
								href='#action1'
								className={
									activeSection === 'about' ? 'text-warning' : 'text-danger'
								}>
								About
							</Nav.Link>
							<Nav.Link href='#action1' className='text-warning'>
								Hire us
							</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};
export default Header;
