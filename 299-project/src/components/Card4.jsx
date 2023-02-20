import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fifa23 from "../pictures/fifa23.jpg";
const Card4 = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={fifa23} />
        <Card.Body style={{height: '300px'}}>
          <Card.Title>Fifa 23</Card.Title>
          <Card.Text>
            FIFA 23 brings The World’s Game to the pitch, with HyperMotion2
            Technology, men’s and women’s FIFA World Cup™coming during the
            season, women’s club teams, cross-play features*, and more.
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card4;
