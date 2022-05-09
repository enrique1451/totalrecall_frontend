import React, {useState} from "react";
import axios from "axios";

import {CardTitle, CardText, Card,  CardImg, CardBody, CardSubtitle, Button} from "reactstrap"



function CarCard({car}) {
  const [carsRecallData, setCarsRecallData] = useState({ data:[] })
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = async () => {
    setIsLoading(true);

    try {

      const unproxiedURL = "http://localhost:3001/"
      const backendRoute = "recalls/recallsByVehicle/"

      const {data} = await axios.get(

        `${unproxiedURL}${backendRoute}`,
        
        {
          "params":{
            "modelYear":car.yearmodel,
            "make": car.carmake,
            "model": car.carmodel
          }
          
        },
      );
      setCarsRecallData(data);

      } finally {
      setIsLoading(false)
      }
    };



  return (
        <Card key={car.car_id}>
          <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
          <CardBody>
            <CardTitle tag="h5">
              {car.yearmodel}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              { car.carmake } { car.carmodel }
            </CardSubtitle>
            <CardText>
              {car.recalls}
            </CardText>
            <Button onClick={handleClick}>
              Get Car Recalls
            </Button>
          </CardBody>
        </Card>


);
}
export default CarCard;