import React, {useState, useEffect} from "react";
import axios from "axios";

import {CardTitle, CardText, Card,  CardImg, CardBody, CardSubtitle, Button} from "reactstrap"



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

  


  

 

    // let id=0; 
    // const recalls = carsRecallData.data.map(async recall => {
    //   <CardText recall = {recall} key={id}></CardText>

    // })
return (
        <Card key={car.car_id}>
          <CardImg alt="Card image cap" src={photo} width="50%" />          
         
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
                  <CardText> 
                    {recall.Component}
                    {recall.Summary}
                    {recall.Remedy}
                  </CardText>
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