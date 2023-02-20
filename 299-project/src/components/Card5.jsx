import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import hogwart from "../pictures/hogleg.jpg";

const Card5 = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={hogwart} />
        <Card.Body style={{height: '300px'}}>
          <Card.Title>Hogwarts Legacy</Card.Title>
          <Card.Text>
            Hogwarts Legacy is an immersive, open-world action RPG. Now you can
            take control of the action and be at the center of your own
            adventure in the wizarding world.
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card5;
