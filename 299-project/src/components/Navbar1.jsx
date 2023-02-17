import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./home">GameFiX</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./rental">Rental</Nav.Link>
            <Nav.Link href="./review">Review</Nav.Link>
            <Nav.Link href="./discussion">Discussion</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
