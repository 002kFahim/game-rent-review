import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import tw3 from "../pictures/tw3.jpg";

const Card1 = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={tw3} />
        <Card.Body>
          <Card.Title>The Witcher 3</Card.Title>
          <Card.Text>
            You are Geralt of Rivia, mercenary monster slayer. Before you stands
            a war-torn, monster-infested continent you can explore at will. Your
            current contract? Tracking down Ciri — the Child of Prophecy, a
            living weapon that can alter the shape of the world.
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card1;
