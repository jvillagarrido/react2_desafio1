import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
 
import HomeIcon from '@material-ui/icons/Home';
import CakeIcon from '@material-ui/icons/Cake';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Navigation() {
  return (
<>
      <Navbar  bg="danger" variant="dark" >
      <Container className="justify-content-start">
      <Link to="/" className="text-white ms-3 text-decoration-none">
      <HomeIcon></HomeIcon>  Home
      </Link>
      <Link to="/contact" className="text-white ms-3 text-decoration-none">
      <ContactMailIcon></ContactMailIcon>  Contacto
      </Link>
      </Container>
      <Navbar.Brand href="/">  Happy Cake <CakeIcon></CakeIcon> </Navbar.Brand>
      </Navbar>
      </>
  );
} 
