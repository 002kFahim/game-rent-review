import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import tw3 from "../pictures/tw3.jpg";
import gtav from "../pictures/gtav.jpg";
import mw2 from "../pictures/mw2.jpg";
import fifa23 from "../pictures/fifa23.jpg";
import hogleg from "../pictures/hogleg.jpg";
import mine from "../pictures/mine.jpg";

const item = [
  {
    id: 1,
    caption: "The Witcher 3",
    des: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will...",
    img: tw3,
  },
  {
    id: 2,
    caption: "Grand Theft Auto 5",
    des: " Grand Theft Auto V offers players the option to explore the award-winning world of Los Santos and Blaine County with epic missions.",
    img: gtav,
  },
  {
    id: 3,
    caption: "Call of Duty Modern Warfare 2",
    des: "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict...",
    img: mw2,
  },
  {
    id: 4,
    caption: "Fifa 23",
    des: "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology, men’s and women’s FIFA World Cup™coming during...",
    img: fifa23,
  },
  {
    id: 5,
    caption: "Hogwarts Legacy",
    des: "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own...",
    img: hogleg,
  },
  {
    id: 6,
    caption: "Minecraft",
    des: " Explore infinite worlds and build everything from the simplest of homes to the grandest of castles with an epic adventure.",
    img: mine,
  },
];

const Card1 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {item.map((value) => {
          return (
            <div style={{ padding: "30px" }}>
              <Card border="warning" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={value.img} />
                <Card.Body style={{ height: "250px" }}>
                  <Card.Title>{value.caption}</Card.Title>
                  <Card.Text>{value.des}</Card.Text>
                  <Button variant="primary">See more</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card1;
