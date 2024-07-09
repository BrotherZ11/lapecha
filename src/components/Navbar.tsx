// Navbar.js
import '../styles/Navbar.css'; // Asegúrate de importar tu archivo CSS
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUtensils, FaEnvelope, FaBook   } from "react-icons/fa";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <FaUtensils/> La Pechá
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#menu">
              <FaBook/> Menú
            </Nav.Link>
            <Nav.Link href="#contacto">
              <FaEnvelope/> Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
