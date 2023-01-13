import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function FormContact() {
  return (
    <Form  className="text-center">
    <h1 className="mb-4">Cuéntanos, ¿en qué te podemos ayudar?</h1>
    <Form.Group className="mb-2 text-center" controlId="formEmail">
      <Form.Label >Correo</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
    </Form.Group>

    <Form.Group className="mb-2" controlId="formDesc">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
 
      <Button  variant="danger" type="submit">
      Submit
    </Button>
  </Form>
  );
}
