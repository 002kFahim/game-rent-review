import React from "react";
import Navbar1 from "../components/Navbar1";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


const Discussion = () => {
  return (
    <div>
      <Navbar1 />
      
      <Form style={{fontFamily:'Poppins', padding: '100px'}}>
      {/* <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Label style={{display:'flex'}}><h1>Start Discussion</h1></Form.Label>
        <Form.Control as="textarea" placeholder="Tell us what is in your mind!" style={{border:'5px solid orange',fontSize:'22px', height:'200px'}} />
        <Form.Text>
        </Form.Text>
      </Form.Group>

      <div style={{display:'flex',justifyContent: "flex-end"}}>
        <Button variant="primary" type="submit" style={{backgroundColor:'Orange',fontSize:'20px'}}>
          post
        </Button>
      </div> */}
      
      <div className="mt-5">
        <h1>
          Recent Discussions
        </h1>
        <Card body style={{fontSize:'22px',height:'400px',border: '5px solid orange'}}> 
          In this segment, all the recent discussions will be shown.
        </Card> 
      </div>

      <div className="mt-3">
        <Button variant="primary" type="submit" style={{marginRight:'10px', fontSize:'20px',backgroundColor:'green'}}>
          UpVote
          <FontAwesomeIcon icon={faThumbsUp} style={{paddingLeft:'10px'}}/>
        </Button>
        <Button variant="primary" type="submit" style={{marginRight:'10px', fontSize:'20px',backgroundColor:'red'}}>
         DownVote
         <FontAwesomeIcon icon={faThumbsDown} style={{paddingLeft:'10px'}}/>
        </Button>
        <Button variant="primary" type="submit" style={{fontSize:'20px',backgroundColor:'Orange'}}>
          Comment
          <FontAwesomeIcon icon={faComment} style={{paddingLeft:'10px'}}/>
        </Button>
      </div>

    </Form>
    </div>
  );
};

export default Discussion;
