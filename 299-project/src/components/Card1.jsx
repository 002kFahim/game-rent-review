import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import tw3 from "../pictures/tw3.jpg";

const Card1 = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={tw3} />
        <Card.Body style={{height: '280px'}}>
          <Card.Title>The Witcher 3</Card.Title>
          <br/>
          <Card.Text>
            You are Geralt of Rivia, mercenary monster slayer. Before you stands
            a war-torn, monster-infested continent you can explore at will. Your
            current contract?...
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card1;
