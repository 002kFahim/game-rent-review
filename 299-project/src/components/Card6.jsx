import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mine from "../pictures/mine.jpg";

const Card6 = () => {
  return (
    <>
      <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={mine} />
        <Card.Body style={{height: '300px'}}>
          <Card.Title>Minecraft</Card.Title>
          <Card.Text>
            Explore infinite worlds and build everything from the simplest of
            homes to the grandest of castles with an epic adventure.
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card6;
