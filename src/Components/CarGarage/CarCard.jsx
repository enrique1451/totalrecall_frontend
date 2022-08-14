import "./css/CarCard.css"
import axios from "axios";
import React, { useState } from "react";
import {CardTitle, Card, CardBody, CardSubtitle, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col, Row, Spinner} from "reactstrap"
import TotalRecallApi from "../../totalRecallAPI";


function CarCard({car}) {

  const [carsRecallData, setCarsRecallData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
  const [type, setType] = useState(null);

  
  const handleClick = async () => {
      setIsLoading(true);
      try {
        const unproxiedURL = "http://localhost:3001/"
        const backendRoute = "recalls/recallsByVehicle/"
        const recallData = await axios.get(
          `${unproxiedURL}${backendRoute}`,
          {
            "params":{
              "make": car.carmake,
              "model": car.carmodel,
              "modelYear":car.yearmodel
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
      setType("success")
      setMessage("Deletion has Been Succesful")
      

        } catch (error) {
            setType("error");
            setMessage("Deletion Error");
        } finally {
          setIsLoading(false)
          setType("");
    }

  }


  return (
    <div> 
      <Row>
        <Col md={12}>
        <Card key={car.car_id}>
          <CardBody>
            <CardTitle tag="h5">
              {car.yearmodel}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              { (car.carmake).toUpperCase() } { (car.carmodel).toUpperCase() }
            </CardSubtitle>
            {isLoading &&
            <div className="spinner">
              <Spinner color="primary" type="grow">
                Loading...
              </Spinner>
              <Spinner color="warning" type="grow">
                Loading...
              </Spinner>
            </div>}
            {carsRecallData.length > 0 && (
            carsRecallData.map(recall => {
            return(
            <Col className="border" sm={{ offset: 2, order: 2, size: 8 }}>
            <Row className="recalls-list">
              <ListGroup>
                <ListGroupItem active>
                  <ListGroupItemHeading>
                    {recall.Component}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <b>Summary: </b>
                    { recall.Summary }
                    <br></br>
                    <br></br>
                    <b>Remedy: </b>
                    {recall.Remedy}
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Row>
            </Col>);
            }))}
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

