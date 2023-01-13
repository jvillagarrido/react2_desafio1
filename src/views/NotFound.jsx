import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Pastel2 from '../img/pastel2.jpg';

export default () => {
  return (
    <Container className="pt-5 text-center">
      <h2 className="mb-4">Lo sentimos....</h2>
      <h2 className="mb-4">La página seleccionada no existe.</h2>
      <Image src={Pastel2}  alt="Pastel2" />
    </Container>
  );
};
