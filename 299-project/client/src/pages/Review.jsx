import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "../components/Navbar1";
import { Row, Col, Card } from "react-bootstrap";
import mw2_2nd from "../pictures/mw2_2nd.jpg";
import axios from "axios";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get("http://locahost:3001/api/reviewI").then((response) => {
      setReview(response.data);
      // console.log(response);
    });
  }, []);

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

      {review.map((val) => {
        return <div>{val.Name}</div>;
      })}
    </>
  );
};

export default Review;
