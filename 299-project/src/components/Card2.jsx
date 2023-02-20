import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import gtav from "../pictures/gtav.jpg";
const item=[
  {
    id:1,
    caption:"The Witcher 3",
    des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
    img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

  },
  {
    id:2,
    caption:"The Witcher 3",
    des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
    img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

  },  {
    id:3,
    caption:"The Witcher 3",
    des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
    img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

  },  {
    id:4,
    caption:"The Witcher 3",
    des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
    img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

  } , {
    id:5,
    caption:"The Witcher 3",
    des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
    img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

  } , {
    id:6,
    caption:"The Witcher 3",
    des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
    img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

  }

 , {
  id:7,
  caption:"The Witcher 3",
  des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
  img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

}

 , {
  id:8,
  caption:"The Witcher 3",
  des:"You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract?...",
  img:"http://127.0.0.1:5173/src/pictures/gtav.jpg"

}
]

const Card2 = () => {
  return (
    <>
    <div style={{display:"flex",alignItems:"center",width:"1400px",flexWrap:"wrap"}}>
      
      {
        item.map((value,index)=>{
          return(
            <div style={{padding:"30px"}}>
 <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={gtav} />
        <Card.Body style={{height: '280px'}}>
          <Card.Title>{value.caption}</Card.Title>
          <Card.Text>
           {
            value.des
           }
          </Card.Text>
          <Button variant="primary">See more...</Button>
        </Card.Body>
      </Card>
            </div>
          )
        })
      }
    </div>
     
    </>
  );
};

export default Card2;
