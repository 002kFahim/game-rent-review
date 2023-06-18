import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Form, InputGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "../components/Navbar1";
import Modal2 from "../components/Modal2";
import Pagination from "react-bootstrap/Pagination";
import Axios from "axios";

const Rental = () => {
  const [review, setReview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  const getFilteredReviews = () => {
    return review.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
    setCurrentPage(totalPages);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getFilteredReviews().slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    Axios.get("http://localhost:5000/reviews").then((response) => {
      setReview(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleClearClick = () => {
    setSearchTerm("");
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar1 />
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>What do you want to buy?</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search your game here"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)" }}
                />
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Pagination
        className="justify-content-end"
        style={{ paddingRight: "23px", paddingTop: "23px" }}
      >
        <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
        <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
        {pageNumbers.map((pageNumber) => {
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          } else if (
            pageNumber === currentPage - 2 ||
            pageNumber === currentPage + 2
          ) {
            return <Pagination.Ellipsis key={pageNumber} />;
          } else {
            return null;
          }
        })}
        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
        <Pagination.Last
          onClick={handleLast}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
      </Pagination>

      <Container>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {currentItems.map((item, index) => (
            <div className="col" key={index}>
              <Card
                className="d-flex h-100"
                style={{
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                  width: "100%",
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <div style={{ display: "flex" }}>
                    <img
                      src={item.Images}
                      style={{ height: "200px", width: "60%" }}
                      alt=""
                    />
                    <div style={{ paddingLeft: "5%", width: "40%" }}>
                      <h4
                        style={{
                          textDecoration: "underline",
                          wordWrap: "break-word",
                        }}
                      >
                        {item.Name}
                      </h4>
                      <b style={{ wordWrap: "break-word" }}>{item.Genre}</b>
                      <p style={{ wordWrap: "break-word" }}>
                        <span style={{ fontWeight: "bold" }}>
                          For One Week:{" "}
                        </span>
                        {item.Price1} Tk
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          For Two Weeks:{" "}
                        </span>
                        {item.Price2} Tk
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          For One Month:{" "}
                        </span>
                        {item.Price3} Tk
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          Buying Price:{" "}
                        </span>
                        {item.Price4} Tk
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto"></div>
                  <Button
                    variant="outline-success"
                    onClick={() => setModalShow(true)}
                  >
                    Buy or Rent This Game
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <Modal2 show={modalShow} onHide={() => setModalShow(false)} />

      <Pagination
        className="justify-content-end"
        style={{ paddingRight: "23px" }}
      >
        <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
        <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
        {pageNumbers.map((pageNumber) => {
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          } else if (
            pageNumber === currentPage - 2 ||
            pageNumber === currentPage + 2
          ) {
            return <Pagination.Ellipsis key={pageNumber} />;
          } else {
            return null;
          }
        })}
        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
        <Pagination.Last
          onClick={handleLast}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
      </Pagination>
    </>
  );
};

export default Rental;
