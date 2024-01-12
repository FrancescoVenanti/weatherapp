import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNav = () => {
	return (
		<Navbar expand="lg" className="bg-black rounded-bottom sticky-top">
			<Container fluid="xl">
				<Navbar.Brand className="text-primary">Epi-Weather</Navbar.Brand>
				<Nav className="ms-auto">
					<NavLink to="/" className="nav-link text-primary">
						Home
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};
export default MyNav;
