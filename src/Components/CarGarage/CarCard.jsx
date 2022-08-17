import "./css/CarCard.css"
import axios from "axios";
import React, { useState } from "react";
import {CardTitle, Card, CardBody, CardSubtitle, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col, Row, Spinner, Collapse} from "reactstrap"
import TotalRecallApi from "../../totalRecallAPI";


function CarCard({car}) {

  const [carsRecallData, setCarsRecallData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  // eslint-disable-next-line
  const [type, setType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  
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
            <div className="cardButtons">
            <Button className="text-wrap" onClick={handleClick} size="sm" style={{ marginBottom: '1rem' }}>
              Get Car Recalls
            </Button>

            <Button className="delete-car" color="danger" outline  size="sm" onClick={handleCarDelete} style={{ marginBottom: '1rem' }}>
              Delete Car
            </Button>

            <Button className="hide" color="success" outline onClick={toggle} size="sm" style={{ marginBottom: '1rem' }}>
               Toggle 
            </Button>  
            </div>



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
                  <Collapse isOpen={isOpen} {...recall}>
                  <Col className="border" sm={{ offset: 2, order: 2, size: 8 }}>
                    <Row className="recalls-list">
                      <ListGroup>
                        <ListGroupItem >
                          <ListGroupItemHeading tag="h3">
                            {recall.Component}
                          </ListGroupItemHeading>
                          <ListGroupItemHeading>
                            Summary: 
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            { recall.Summary }
                          </ListGroupItemText>
                          <ListGroupItemHeading>
                            Remedy: 
                          </ListGroupItemHeading>
                          <ListGroupItemText>  
                            {recall.Remedy}
                          </ListGroupItemText>
                        </ListGroupItem>
                      </ListGroup>
                    </Row>
                </Col>
                </Collapse>  
                )}))}
          </CardBody>
        </Card>
      </Col>
      </Row>
      </div>
      )}
export default CarCard;

