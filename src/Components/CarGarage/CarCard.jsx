import React from "react";
import {CardTitle, CardText, Card, Container} from "reactstrap"



function CarCard(props) {
  const { id, yearmodel, carmake, carmodel, recalls}  = props.car


  return (
    
    <Container>
      <Card body inverse style = {{backgroundColor: '#333', borderColor: '#333'}}>
        <CardTitle tag="h5" key={id}>
          {yearmodel} { carmake }  { carmodel }
        </CardTitle>
        <CardText>
          { recalls }
        </CardText>
      </Card>
      <Card body color="primary" inverse />
    </Container>
      );
    }


export default CarCard;