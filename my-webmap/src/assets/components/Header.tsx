import "../styles/header.css"

export default function Header() {
  return (
    /*
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
    */
    <header className="bg-blue-600 text-white p-4 shadow-md flex flex-row justify-start gap-5 items-center content-end">
      <h1 className="text-2xl font-bold">MAP OF SAINTS</h1>
      <div className="flex gap-5 justify-end">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"> test1 </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"> test2 </button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"> test3 </button>
      </div>
    </header>
  );
}