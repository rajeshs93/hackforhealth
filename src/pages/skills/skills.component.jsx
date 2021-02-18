import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Our Community
import { skills } from "./skills-data";

import "./skills.styles.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">Our Community</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
         
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
            <Card.Body>
                <Card.Title className="text-center  card-title">#Name</Card.Title>
                <hr />
                <Card.Text className="text-center style">
                    <strong className="body-title-style ">We are here for your care</strong>
                    <br />
                    <strong>Health:</strong> Here is all about to make you healthy
                    <br />
                    <strong>Happiness:</strong> We will make you happy day to day life
                    <br/>
                    
                  </Card.Text>

              </Card.Body>
              
            </Card>
            <Card className="focus mt-2 mb-2">
            <Card.Body>
                <Card.Title className="text-center  card-title">#Name</Card.Title>
                <hr />
                <Card.Text className="text-center style">
                    <strong className="body-title-style ">We are here for your care</strong>
                    <br />
                    <strong>Health:</strong> Here is all about to make you healthy
                    <br />
                    <strong>Happiness:</strong> We will make you happy day to day life
                    <br/>
                    
                  </Card.Text>

              </Card.Body>
              
            </Card>
          </Col>
          

          
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">#Name</Card.Title>
                <hr />
                <Card.Text className="text-center style">
                    <strong className="body-title-style ">We are here for your care</strong>
                    <br />
                    <strong>Health:</strong> Here is all about to make you healthy
                    <br />
                    <strong>Happiness:</strong> We will make you happy day to day life
                    <br/>
                    
                  </Card.Text>

              </Card.Body>
            </Card>

           
            <Card className="focus mt-2 mb-2 ">
            <Card.Body>
                <Card.Title className="text-center  card-title">#Name</Card.Title>
                <hr />
                <Card.Text className="text-center style">
                    <strong className="body-title-style ">We are here for your care</strong>
                    <br />
                    <strong>Health:</strong> Here is all about to make you healthy
                    <br />
                    <strong>Happiness:</strong> We will make you happy day to day life
                    <br/>
                    
                  </Card.Text>

              </Card.Body>
            </Card>
          </Col>

        
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
            <Card.Body>
                <Card.Title className="text-center  card-title">#Name</Card.Title>
                <hr />
                <Card.Text className="text-center style">
                    <strong className="body-title-style ">We are here for your care</strong>
                    <br />
                    <strong>Health:</strong> Here is all about to make you healthy
                    <br />
                    <strong>Happiness:</strong> We will make you happy day to day life
                    <br/>
                    
                  </Card.Text>

              </Card.Body>
            </Card>

           

            <Card className="focus mt-2 mb-2">
            <Card.Body>
                <Card.Title className="text-center  card-title">#Name</Card.Title>
                <hr />
                <Card.Text className="text-center style">
                    <strong className="body-title-style ">We are here for your care</strong>
                    <br />
                    <strong>Health:</strong> Here is all about to make you healthy
                    <br />
                    <strong>Happiness:</strong> We will make you happy day to day life
                  
                  </Card.Text>

              </Card.Body>
            </Card>
          
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
