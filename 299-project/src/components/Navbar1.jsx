import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../pictures/gamepad.jpg";

const Navbar1 = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./home">
            {" "}
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React logo"
            />
            GameFiX
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./rental">Rental</Nav.Link>
            <Nav.Link href="./review">Review</Nav.Link>
            <Nav.Link href="./discussion">Discussion</Nav.Link>
            {isAuthenticated && (
              <Nav.Item>
                <img
                  src={user.picture}
                  //alt={user.name}
                  roundedCircle
                  width={30}
                  height={30}
                  className="mr-2"
                />
                {/* <span style={{ color: "white" }}>{user.name}</span> */}
              </Nav.Item>
            )}
            {isAuthenticated ? (
              <Button
                variant="outline-success"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="outline-success"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
