import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget";



export const NavBar = () => {
    return  (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Mi Negocio</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="category/tijeras">Tijeras</NavLink>
                        <NavLink to="category/peines">Peines</NavLink>
                    </Nav>
                    <CartWidget />
            </Container>
        </Navbar>
            
        
    );
}