import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="none" expand="lg" style={{ margin: 30 }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://mail.google.com/mail/u/0?ui=2&ik=a53d1212ba&attid=0.1.1&permmsgid=msg-f:1780679376862767813&th=18b63e7574c4eac5&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-WDVv4U3Ee2AI2YIgQfGdB0_O62JlqWOR6HwCgHnHfsKvKskrToWjz_Am3SV2il1ePSQihaRbHIAr9ghqxmJw5MyYgL4jKJEoXGxgMinTVl6uNYwrIuTBE6g4&disp=emb"
            height={100}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Sign In
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
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
