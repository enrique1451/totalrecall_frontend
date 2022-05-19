import React, { useEffect, useState } from "react";
import { CardGroup} from "reactstrap";
import CarCard from "./CarCard";
import TotalRecallApi from "../../totalRecallAPI";
// import axios from "axios";



function Car() {
  const [carsData, setCarsData] = useState([]);
  // const [carsPhotos, setCarsPhotos] = useState();
  // const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getCars = async () => {
          const carsResponse = await TotalRecallApi.getUserCars();
          setCarsData(carsResponse)
         }
     getCars()    
  }, []);

  // useEffect(()=> {
  //   const getPhotos = () => {
  //     setIsLoading(true);
  //     try{
  //       const imageAPI = "https://api.unsplash.com/photos/random"
  //       const photosData = carsData.forEach( async car => {
  //         await axios.get(
  //           `${imageAPI}`,
  //           {
  //             "headers": {
  //               "Accept-Version": "v1"
  //               },
  //             "params": {
  //               "client_id": "Tjr3Pyqu9-aky-gmBz4S3xd5E4pDjra1B7XLdW944nM",
  //               "query":  car.carmake +" "+ car.carmodel,
  //               }
  //           })
  //           setCarsPhotos(photosData)
  //           console.log(photosData)
  //       })
       
        
        
  //       } finally {
  //         setIsLoading(false)
  //       }

  //     }
  //     getPhotos()

      // }, [carsData])

      
  let id = 0;
  const cars = carsData.map(car => <CarCard car={car} key={id++}  />)
  // const photos = carsPhotos.map(photo => <CarCard photo={photo} key={id++} />)




  return (

    

    <div className = "user-cars">
      <CardGroup className="card-body">
            {cars}
      </CardGroup>
    </div>
      );
    }
  export default Car;

