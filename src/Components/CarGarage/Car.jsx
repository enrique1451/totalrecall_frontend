import React, { useEffect, useState } from "react";
import { CardGroup, Alert, Col, Container} from "reactstrap";
import CarCard from "./CarCard";
import TotalRecallApi from "../../totalRecallAPI";
import NewCarForm from "./NewCarForm";
import "./css/Car.css"



function Car({handleNewCar}) {
  const [carsData, setCarsData] = useState([]);



  useEffect(() => {
    const getCars = async () => {
          const carsResponse = await TotalRecallApi.getUserCars();
          setCarsData(carsResponse)
         }
     getCars()    
  }, []);
  
  
    
  const cars = carsData.map(car => <CarCard car={car} key={carsData.car_id}  />)
 
  return (
    <Container>
      <div className="split left">
        <NewCarForm handleNewCar={handleNewCar} />
      </div>

      <div className = "user-cars split2 right">
      <CardGroup className="card-body">
            {cars}
      </CardGroup>

      {cars.length < 1 && (
        <div>
          <Col className="bg" sm={{ offset: 2, order: 2, size: 8 }}>
          <Alert color="info" >
            <h4 className="alert-heading">
              CAR GARAGE IS EMPTY.
            </h4>
            <p>
              Seems like you don't have any cars in your garage 😭 
            </p>
            <hr />           
          </Alert>
          </Col>
        </div>
        )
      }
    </div>
    </Container>
      );
    }
  export default Car;

