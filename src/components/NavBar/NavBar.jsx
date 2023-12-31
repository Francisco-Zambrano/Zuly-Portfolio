import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import './Styles.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">Zulyberth González</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Col xs="auto">
            <Button className="nav-btn" type="submit">Let's connect</Button>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar