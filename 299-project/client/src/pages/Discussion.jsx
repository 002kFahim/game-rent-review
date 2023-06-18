import { React, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal1 from "../components/Modal1";
import { Navbar, Container } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComment, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Discussion = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Navbar1 />

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Know The Insights</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search your here"
                  className="me-2"
                  aria-label="Search"
                  style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)" }}
                />
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form style={{ fontFamily: "Poppins", padding: "100px" }}>
        <div className="mt-5">
          <h1>Recent Discussions</h1>
          <Card
            body
            style={{
              fontSize: "22px",
              height: "400px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card.Title>God Of War</Card.Title>
            <Card.Text>
              By Zaffbruh: Give me all your BEST OF THE BEST builds so I can
              start the grind before NG+! God of War is one of those games where
              I want to get the bést possible outfit in-game. What are your
              thoughts on builds? Please be as detailed as possible so we can
              get hands-on immediately! I've been using Sindri's Chestplate with
              the 2 other Valkyrie parts with the Inf Gauntlet. Any
              recommendations?
            </Card.Text>
          </Card>
        </div>

        <div className="mt-3">
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "green",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            UpVote
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "red",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            DownVote
            <FontAwesomeIcon
              icon={faThumbsDown}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              fontSize: "20px",
              backgroundColor: "Orange",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            Comment
            <FontAwesomeIcon icon={faComment} style={{ paddingLeft: "10px" }} />
          </Button>
        </div>
      </Form>

      <Form style={{ fontFamily: "Poppins", padding: "100px" }}>
        <div>
          <Card
            body
            style={{
              fontSize: "22px",
              height: "400px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card.Title>Elden Ring !!Spoiler ALert!!</Card.Title>
            <Card.Text>
              By Macro2043: Malenia is insane I’m sure this has already been
              said a thousand times but Jesus. I’ve never had this much trouble
              with a boss in any game ever. She seems to have near infinite
              poise, a practically unavoidable lightning fast combo, can
              practically one shot me through heavy armor and 40 vit, and she
              heals with every hit even when it’s blocked? That’s bad enough. I
              broke and tried using my fully upgraded mimic tear ashes, but she
              regains health when hitting that too so that didn’t go so well. I
              barely got through phase one and that was only after googling the
              best build to beat her with, respeccing to a blood build, and
              doubling my potential damage output with the mimic tear. Bleed
              from two sources seems to be enough to offset her healing. Even
              then I only lived because I got lucky and she only did her dance
              thing with the mimic as her target, which for some reason appears
              to actually be able to block it when my stance gets broken pretty
              much immediately? Then I discovered phase two. My mimic tear was
              killed instantly by some attack, didn’t see what exactly, I was
              too busy being dismayed by the fact the phase even exists.
            </Card.Text>
          </Card>
        </div>

        <div className="mt-3">
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "green",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            UpVote
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "red",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            DownVote
            <FontAwesomeIcon
              icon={faThumbsDown}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              fontSize: "20px",
              backgroundColor: "Orange",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            Comment
            <FontAwesomeIcon icon={faComment} style={{ paddingLeft: "10px" }} />
          </Button>
        </div>
      </Form>

      <div>
        <Button
          variant="success"
          style={{
            position: "fixed",
            width: "50px",
            height: "50px",
            right: "20px",
            bottom: "30px",
            zIndex: "9999",
            borderRadius: "50%",
          }}
          onClick={() => setModalShow(true)}
        >
          {" "}
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
      </div>
      <Modal1 show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Discussion;
