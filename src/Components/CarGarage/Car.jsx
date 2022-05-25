import React, { useEffect, useState } from "react";
import { CardGroup, Alert} from "reactstrap";
import CarCard from "./CarCard";
import TotalRecallApi from "../../totalRecallAPI";



function Car() {
  const [carsData, setCarsData] = useState([]);


  useEffect(() => {
    const getCars = async () => {
          const carsResponse = await TotalRecallApi.getUserCars();
          setCarsData(carsResponse)
         }
     getCars()    
  }, []);
  
  
  console.log(carsData)
    
  const cars = carsData.map(car => <CarCard car={car} key={carsData.car_id}  />)
 
  return (
    <div className = "user-cars">
      <CardGroup className="card-body">
            {cars}
      </CardGroup>
      {cars.length < 1 && (
        <div>
          <Alert >
            <h4 className="alert-heading">
              CAR GARAGE IS EMPTY.
            </h4>
            <p>
              Seems like you don't have any cars in your garage 😭 
            </p>
            <hr />
          </Alert>
        </div>
        )
      }
    </div>
      );
    }
  export default Car;

