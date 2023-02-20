import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mw2 from "../pictures/mw2.jpg";

const Card3 = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mw2} />
        <Card.Body style={{height: '280px'}}>
          <Card.Title>Call of Duty Modern Warfare 2</Card.Title>
          <Card.Text>
            Call of Duty®: Modern Warfare® II drops players into an
            unprecedented global conflict that features the return of the iconic
            Operators of Task Force 141.
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card3;
