import "../styles/header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container className="container d-flex fit-content">
         <div className="d-flex justify-content-start gap-3 w-auto ">
          <Navbar.Brand href="#home">MAP OF SAINTS</Navbar.Brand>
          <Nav className="ms-auto d-flex gap-3 justify-content-start">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#project">project</Nav.Link>
            <Nav.Link href="#EventsMaps">EventsMaps</Nav.Link>
            <Nav.Link href="#Catalog">Catalog</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}