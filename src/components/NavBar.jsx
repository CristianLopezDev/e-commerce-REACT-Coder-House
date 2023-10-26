import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";



export const NavBar = () => {
    return  (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Mi Negocio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Profile</Nav.Link>
                        <Nav.Link href="#features">Crear Producto</Nav.Link>
                        <Nav.Link href="#pricing">Editar Producto</Nav.Link>
                    </Nav>
                    <CartWidget />
            </Container>
        </Navbar>
            
        
    );
}