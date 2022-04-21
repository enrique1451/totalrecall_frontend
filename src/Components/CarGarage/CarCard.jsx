import React, { useEffect, useState, useRef } from "react";
import {CardTitle, CardText, Card, Container} from "reactstrap"
import TotalRecallApi from "../../totalRecallAPI";
// import useLocalStorage from "../../hooks/UseLocalStorage";

function CarCard() {
  const [carsData, setCarsData] = useState([]); 


  useEffect(() => {
    const fetchData = async (username) => {
     
      const resp = await TotalRecallApi.getUserGarage(username)
      console.log(resp)
      const cars = resp.json()
      setCarsData(cars)
    };
    fetchData()
}, []);

  return (

    <Container>
      <Card body inverse style = {{backgroundColor: '#333', borderColor: '#333'}}>
        <CardTitle tag="h5">
          {carsData.modelyear}  {carsData.carmake}  {carsData.carmodel}
        </CardTitle>
        <CardText>
          To be filled with recalls and solutions....tbd
          
        </CardText>
        
      </Card>
      <Card body color="primary" inverse />
    </Container>
      );
    }


export default CarCard;