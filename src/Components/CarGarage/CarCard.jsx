import React, { useState } from "react";
import axios from "axios";

import {CardTitle, CardText, Card,  CardImg, CardBody, CardSubtitle, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col, Row} from "reactstrap"



function CarCard({car}, {photo}) {
  const [carsRecallData, setCarsRecallData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = async () => {
      setIsLoading(true);
      try {

        const unproxiedURL = "http://localhost:3001/"
        const backendRoute = "recalls/recallsByVehicle/"
        const recallData = await axios.get(
          `${unproxiedURL}${backendRoute}`,
          {
            "params":{
              "modelYear":car.yearmodel,
              "make": car.carmake,
              "model": car.carmodel
            }
          });
        
        setCarsRecallData(recallData.data.results)
      
      } finally {
        setIsLoading(false);
      };
      
  };

return (
        <Card key={car.car_id}>
          <CardImg alt="Card image cap" src={ photo } width="50%" />          
         
          <CardBody>
            <CardTitle tag="h5">
              {car.yearmodel}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              { car.carmake } { car.carmodel }
            </CardSubtitle>



            {isLoading &&  <CardText>Loading.... </CardText>}
            {carsRecallData.length > 0 && (
             
                carsRecallData.map(recall => {
                  return(
                    <Col className="bg-light border" sm={{ offset: 1, order: 2, size: 8 }}>
                      <Row>
                        <CardText>

                          <ListGroup>
                            <ListGroupItem active>
                              <ListGroupItemHeading>
                                {recall.Component}
                              </ListGroupItemHeading>
                              <ListGroupItemText>
                                <b>Summary:</b>
                                {recall.Summary}
                                <br></br>
                                <br></br>
                                <b>Remedy:</b>
                                {recall.Remedy}
                              </ListGroupItemText>
                            </ListGroupItem>
                          </ListGroup>
                        </CardText>
                    </Row>
                    </Col>
                    );
                    })
                )}
            
              
            <Button onClick={handleClick}>
              Get Car Recalls
            </Button>


          </CardBody>
        </Card>


);
}
export default CarCard;

