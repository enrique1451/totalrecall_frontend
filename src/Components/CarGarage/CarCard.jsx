import React from "react";

import {CardTitle, CardText, Card,  CardImg, CardBody, CardSubtitle, Button} from "reactstrap"



function CarCard({car}) {



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
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>


);
}
export default CarCard;