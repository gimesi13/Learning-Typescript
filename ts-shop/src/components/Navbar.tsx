import { Link } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";

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
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <FiShoppingCart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
          >
            2
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
