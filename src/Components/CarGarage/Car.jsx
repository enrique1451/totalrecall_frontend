import React, { useEffect, useState } from "react";
import { CardGroup } from "reactstrap";
import CarCard from "./CarCard";
import TotalRecallApi from "../../totalRecallAPI";



function Car() {
  const [carsData, setCarsData] = useState([]);
  const [carsRecallData, setCarsRecallData] = useState([]);

  // const recallURL = `http://localhost:3001/cars/recalls/recallsByVehicle?modelYear=${car.yearmodel}&make=${car.carmake}&model=${car.carmodel}`
  


  useEffect(() => {
    const getCars = async () => {

      // Request to backend to provide cars owned by current user
      const carsResponse = await TotalRecallApi.getUserCars();
      console.log("CARS ARRAY IN Car.jsx Component", carsResponse)
      const recallsResponse =  await TotalRecallApi.getCarsRecalls(carsResponse)

      setCarsData(carsResponse)
      setCarsRecallData(recallsResponse)
    }
    getCars()
    
  }, []);
  
  let id = 0;
  const cars = carsData.map(car => <CarCard car={car} key={id++}  />)




  return (

    <div className = "User-cars">
      <CardGroup>
            {cars}
      </CardGroup>
    </div>
      );
    }
  export default Car;

