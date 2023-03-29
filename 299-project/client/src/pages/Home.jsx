import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar1 from "../components/Navbar1";
import About1 from "../components/About1";
import { Container, Col, Row } from "react-bootstrap";
import Card1 from "../components/Card1";
import pic1 from "../pictures/hogleg.jpg";
import pic2 from "../pictures/elden Ring.jpg";
import pic3 from "../pictures/dead space.jpg";
import pic4 from "../pictures/ghost.jpg";
import pic5 from "../pictures/re2.jpg";
import pic6 from "../pictures/callistoprotocol.jpg";
const Home = () => {
  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div>
        <Carousel fade className="carousel-fade">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={pic1}
              alt="First slide"
              style={{ height: "700px", width: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Hogwarts Legacy</h3>
              <p>
                Hogwarts Legacy is an immersive, open-world action RPG. Now you
                can take control of the action and be at the center of your own
                adventure in the wizarding world.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
              style={{ height: "700px", width: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Elden Ring</h3>
              <p>
                Rise, Tarnished, and be guided by grace to brandish the power of
                the Elden Ring and become an Elden Lord in the Lands Between.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
              style={{ height: "700px", width: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Dead Space</h3>
              <p>
                The sci-fi survival-horror classic returns, completely rebuilt
                to offer an even more immersive experience — including visual,
                audio, and gameplay improvements — while staying faithful to the
                original game’s thrilling vision.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={pic4}
              alt="Third slide"
              style={{ height: "700px", width: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Ghost of Tsushima</h3>
              <p>
                Ghost of Tsushima is a sprawling, open-world samurai game set in
                feudal Japan.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={pic5}
              alt="Third slide"
              style={{ height: "700px", width: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Resident Evil 2 Remake</h3>
              <p>
                A deadly virus engulfs the residents of Raccoon City in
                September of 1998, plunging the city into chaos as flesh eating
                zombies roam the streets for survivors. An unparalleled
                adrenaline rush, gripping storyline, and unimaginable horrors
                await you. Witness the return of Resident Evil 2.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={pic6}
              alt="Third slide"
              style={{ height: "700px", width: "100%", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>The Callisto Protocol™</h3>
              <p>
                Survive to escape the horrors of Callisto and uncover the dark
                secrets of Jupiter’s dead moon.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <Row>
          <Col className="text-center my-5">
            <h3>Featured & Frequently Searched</h3>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex justify-content-center">
        {/* <Row style={{paddingBottom: '8px',display:"flex",alignItems:"center"}}> */}
        <Col xs={12}>
          <Card1 />
        </Col>
        {/* <Col className="mt-5" xs={12} md={4}>
            <Card2 />
          </Col>
          <Col className="mt-5" xs={12} md={4}>
            <Card3 />
          </Col>
          <Col className="mt-5" xs={12} md={4}>
            <Card4 />
          </Col>
          <Col className="mt-5" xs={12} md={4}>
            <Card5 />
          </Col>
          <Col className="mt-5" xs={12} md={4}>
            <Card6 />
          </Col> */}
        {/* </Row> */}
      </Container>
      <About1 />
    </>
  );
};

export default Home;
