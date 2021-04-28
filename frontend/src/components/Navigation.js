import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/features">Features</Nav.Link>
        <Nav.Link href="/pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation;