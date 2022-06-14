import "./css/CarCard.css"
import axios from "axios";
import React, { useState } from "react";
import {CardTitle, CardText, Card, CardBody, CardSubtitle, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col, Row} from "reactstrap"
import TotalRecallApi from "../../totalRecallAPI";
import Notifications from "../Notifications/Notifications";


function CarCard({car}) {

  const [carsRecallData, setCarsRecallData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  
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

  const handleCarDelete = async () => {
    setIsLoading(true);

    try {
      await TotalRecallApi.removeUserCar({car})

    } catch (error) {
      setError(true)

    } finally {
      setIsLoading(false)
      }
  }

  

  return (
    <div>
    {error && <Notifications type="danger" message="Error Deleting Car from Database"/>} 
      <Row >
        <Col md={12}>
          <Card key={car.car_id}> 
          <CardBody>
            <CardTitle tag="h5">
              {car.yearmodel}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              { (car.carmake).toUpperCase() } { (car.carmodel).toUpperCase() }
            </CardSubtitle>



            {isLoading &&  <CardText>Loading.... </CardText>}
            {carsRecallData.length > 0 && (
                carsRecallData.map(recall => {
                  return(
                    <Col className="bg-light border" sm={{ offset: 2, order: 2, size: 8 }}>
                      <Row>
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
                      </Row>
                    </Col>);
                    })
                  )}
            
          <Button className="text-wrap" onClick={handleClick} size="sm">
              Get Car Recalls
          </Button>

          <Button color="danger" outline className="delete-car" size="sm" onClick={handleCarDelete}>
            Delete Car
          </Button>
          
          </CardBody>
        </Card>
        </Col>

        </Row>
        </div>


);
}
export default CarCard;

