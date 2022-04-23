import React, { useEffect, useState, useRef } from "react";
import {CardTitle, CardText, Card, Container} from "reactstrap"
import CarCard from "./CarCard";
import TotalRecallApi from "../../totalRecallAPI";
// import useLocalStorage from "../../hooks/UseLocalStorage";

function Car() {
  const [carsData, setCarsData] = useState([]);
  


  useEffect(() => {
    const getCars = async () => {
      const carsResponse = await TotalRecallApi.getUserGarage()
      console.log("CARS ARRAY", carsResponse)
      setCarsData(carsResponse)
    };
    getCars()
  }, []);

 const cars = carsData.map(car => <CarCard car={car} key={car.id} />)

  



  return (

    <div className = "User-cars">
      {cars}
    </div>
      );
    }


export default Car;