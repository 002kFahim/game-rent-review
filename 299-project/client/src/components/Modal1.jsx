import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Modal1 = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Start A Discussion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicTextarea">
            <Form.Label style={{ display: "flex" }}></Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Tell us what is in your mind!"
              style={{
                border: "5px solid orange",
                fontSize: "22px",
                height: "200px",
              }}
            />
            <Form.Text></Form.Text>
          </Form.Group>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "Orange", fontSize: "20px" }}
            >
              post
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modal1;
