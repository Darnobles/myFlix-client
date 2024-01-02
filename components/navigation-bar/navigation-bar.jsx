import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../img/comic-flick.png";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="none" expand="lg" style={{ margin: 30 }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={image} height={100}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Sign In Hello
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout Hello</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
