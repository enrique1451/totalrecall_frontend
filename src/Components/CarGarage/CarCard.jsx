import "./CarCard.css"
import axios from "axios";
import React, { useState } from "react";
import {CardTitle, CardText, Card, CardBody, CardSubtitle, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col, Row} from "reactstrap"
import TotalRecallApi from "../../totalRecallAPI";




function CarCard({car}, {photo}) {
  const [carsRecallData, setCarsRecallData] = useState([])
  const [carsDeleteRes, setCarsDeleteRes] = useState(null)
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

  const handleCarDelete = async () => {
    setIsLoading(true);
    // eslint-disable-next-line
    try {
      const carDeleteResponse = await TotalRecallApi.removeUserCar({car})
      setCarsDeleteRes(carDeleteResponse)
    } finally {
      setIsLoading(false)
      }
  }
  console.log(carsDeleteRes)




return (
        <Card key={car.car_id}>
        
         
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

            
     

              
            
            
          <Button onClick={handleClick}>
              Get Car Recalls
          </Button>
           
          <Button color="danger" outline className="delete-car" size="sm" onClick={handleCarDelete}>
            Delete Car
          </Button>


          </CardBody>
        </Card>


);
}
export default CarCard;

