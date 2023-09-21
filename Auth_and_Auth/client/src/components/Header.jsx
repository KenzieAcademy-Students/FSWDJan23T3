import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useProvideAuth } from "../contexts/AuthContext";

function Header() {
  const { auth, signout } = useProvideAuth();

  return (
    <Navbar expand="md" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auth Demo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="top-nav" />
        <Navbar.Collapse id="top-nav">
          <Nav className="ms-auto">
            {auth.isAuthenticated ? (
              <Nav.Link onClick={signout}>Sign Out</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/signin">
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
