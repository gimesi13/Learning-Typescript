import { Link } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/shop" as={Link}>
            Shop
          </Nav.Link>
          <Nav.Link to="/about" as={Link}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
