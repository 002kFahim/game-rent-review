import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "../components/Navbar1";
import { Row, Col, Card } from "react-bootstrap";
import mw2_2nd from "../pictures/mw2_2nd.jpg";

const Review = () => {
  return (
    <>
      <Navbar1 />
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Know Your Games</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Container>
          <Card>
            <Card.Img variant="top" src={mw2_2nd}/>
            <Card.Body>
              <Card.Text>
                This page is under development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Review;
