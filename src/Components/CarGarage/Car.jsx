import React, { useEffect, useState } from "react";
import { CardGroup , Alert} from "reactstrap";
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
  // const photos = carsPhotos.map(photo => <CarCard photo={photo} key={id++} />)



 
  return (
    <div className = "user-cars">
      <CardGroup className="card-body">
            {cars}
            {cars.length < 1 && (
             <div>
                <Alert>
                  <h4 className="alert-heading">
                   Ooops.....your garage looks empty.
                  </h4>
                  <p>
                    Seems like you don't have any cars in your garage. :( 
                  </p>
                  <hr />
                </Alert>
              </div>)}
      </CardGroup>
    </div>
      );
    }
  export default Car;

