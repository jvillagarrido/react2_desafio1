import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Pastel from '../img/pastel.jpg';

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles más felices </h6>
      <Image src={Pastel}  alt="Pastel"  />
    </Container>
  );
};
