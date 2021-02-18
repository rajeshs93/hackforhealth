import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// events
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="events">
      <h1 className="pt-3 text-center font-details-b pb-3">Events</h1>
      <Timeline>
        <Events>
        {/* Event: First Event */}
        <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="First Event"
            src={L_ReactToDoList}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      EVENT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Place:</strong> Place Here
                        <hr />
                      
                        <strong>Time:</strong>  Time Here
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              
            </div>
          </ImageEvent>


{/* Event: First Event */}
<ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Second Event"
            src={L_ReactToDoList}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      EVENT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Place:</strong> Place Here
                        <hr />
                      
                        <strong>Time:</strong>  Time Here
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              
            </div>
          </ImageEvent>

{/* Event: First Event */}
<ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Third Event"
            src={L_ReactToDoList}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      EVENT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Place:</strong> Place Here
                        <hr />
                      
                        <strong>Time:</strong>  Time Here
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              
            </div>
          </ImageEvent>

          {/* Event: First Event */}
        <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Fourth Event"
            src={L_ReactToDoList}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      EVENT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Place:</strong> Place Here
                        <hr />
                      
                        <strong>Time:</strong>  Time Here
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
