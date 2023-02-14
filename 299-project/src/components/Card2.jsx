import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gtav from "../pictures/gtav.jpg";

const Card2 = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={gtav} />
        <Card.Body>
          <Card.Title>Grand Theft Auto 5</Card.Title>
          <Card.Text>
            Grand Theft Auto V offers players the option to explore the
            award-winning world of Los Santos and Blaine County with epic
            missions.
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card2;
