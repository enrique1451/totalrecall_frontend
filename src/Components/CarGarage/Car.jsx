import React, { useEffect, useState } from "react";
import { CardGroup } from "reactstrap";
import CarCard from "./CarCard";
import TotalRecallApi from "../../totalRecallAPI";
// import axios from "axios";



function Car() {
  const [carsData, setCarsData] = useState([]);
  // const [carsPhotos, setCarsPhotos] = useState([]);
  // const [carsRecallData, setCarsRecallData] = useState([]);


  // const recallURL = `http://localhost:3001/cars/recalls/recallsByVehicle?modelYear=${car.yearmodel}&make=${car.carmake}&model=${car.carmodel}`
  


  useEffect(() => {
    const getCars = async () => {
      // const imageAPI = "https://api.unsplash.com/photos/random"


      // Request to backend to provide information of cars owned by current user

      // console.log("CARS ARRAY IN Car.jsx Component", carsResponse)
      // console.log("Recalls IN Car.jsx Component", carsResponse)


      const carsResponse = await TotalRecallApi.getUserCars();
      
      // const photoResponse = await carsResponse.forEach(car => {
      //   const {data} = axios.get(
      //     `${imageAPI}`,
      //     {
      //       "headers": {
      //         "Accept-Version": "v1"
              
      //       },
      //       "params": {
      //         "client_id": "Tjr3Pyqu9-aky-gmBz4S3xd5E4pDjra1B7XLdW944nM",
      //         "query":  car.carmake +" "+ car.carmodel,
      //         "count": 1
              
      //     }}
      //   )

      //   return data
      // });

      setCarsData(carsResponse)
      // setCarsPhotos(photoResponse)

      // console.log(carsPhotos)

     

      
    }
    getCars()
    
  }, []);

 
  
  let id = 0;
  const cars = carsData.map(car => <CarCard car={car} key={id++}  />)
  // const photos = carsPhotos.map(photo => <CarCard photo={photo} key={id++} />)




  return (

    <div className = "User-cars">
      <CardGroup>
            {cars}
      </CardGroup>
    </div>
      );
    }
  export default Car;

//   [
//     {
//         "id": "zuGsDTslHkc",
//         "created_at": "2021-02-17T21:58:18-05:00",
//         "updated_at": "2022-05-10T18:17:06-04:00",
//         "promoted_at": null,
//         "width": 4016,
//         "height": 6016,
//         "color": "#f3f3f3",
//         "blur_hash": "LWDcUK-;IU%M~qxuM{xuIUM{ayjs",
//         "description": "Black Tesla Model 3 ",
//         "alt_description": "black car parked in garage",
//         "urls": {
//             "raw": "https://images.unsplash.com/photo-1613616734873-f009d39c95d9?ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg&ixlib=rb-1.2.1",
//             "full": "https://images.unsplash.com/photo-1613616734873-f009d39c95d9?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg&ixlib=rb-1.2.1&q=85",
//             "regular": "https://images.unsplash.com/photo-1613616734873-f009d39c95d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg&ixlib=rb-1.2.1&q=80&w=1080",
//             "small": "https://images.unsplash.com/photo-1613616734873-f009d39c95d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg&ixlib=rb-1.2.1&q=80&w=400",
//             "thumb": "https://images.unsplash.com/photo-1613616734873-f009d39c95d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg&ixlib=rb-1.2.1&q=80&w=200",
//             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1613616734873-f009d39c95d9"
//         },
//         "links": {
//             "self": "https://api.unsplash.com/photos/zuGsDTslHkc",
//             "html": "https://unsplash.com/photos/zuGsDTslHkc",
//             "download": "https://unsplash.com/photos/zuGsDTslHkc/download?ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg",
//             "download_location": "https://api.unsplash.com/photos/zuGsDTslHkc/download?ixid=MnwzMjcyNzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTIyODEyOTg"
//         },
//         "categories": [],
//         "likes": 5,
//         "liked_by_user": false,
//         "current_user_collections": [],
//         "sponsorship": null,
//         "topic_submissions": {},
//         "user": {
//             "id": "hOoMb7N8o9s",
//             "updated_at": "2022-05-11T01:20:02-04:00",
//             "username": "icanshoottoo",
//             "name": "Kyle Williamson",
//             "first_name": "Kyle",
//             "last_name": "Williamson",
//             "twitter_username": "icanshoottoo",
//             "portfolio_url": "http://icanshoottoo.com/",
//             "bio": "I currently shoot with a Nikon D3000 & D600, using a Nikon 70-300mm lens, and a Nikon 35mm lens. I primarily focus on Landscape, Street, Product, and Portrait photography. Follow me on Insta for more!",
//             "location": "VA",
//             "links": {
//                 "self": "https://api.unsplash.com/users/icanshoottoo",
//                 "html": "https://unsplash.com/@icanshoottoo",
//                 "photos": "https://api.unsplash.com/users/icanshoottoo/photos",
//                 "likes": "https://api.unsplash.com/users/icanshoottoo/likes",
//                 "portfolio": "https://api.unsplash.com/users/icanshoottoo/portfolio",
//                 "following": "https://api.unsplash.com/users/icanshoottoo/following",
//                 "followers": "https://api.unsplash.com/users/icanshoottoo/followers"
//             },
//             "profile_image": {
//                 "small": "https://images.unsplash.com/profile-1612923877387-8f5f15044567image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
//                 "medium": "https://images.unsplash.com/profile-1612923877387-8f5f15044567image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
//                 "large": "https://images.unsplash.com/profile-1612923877387-8f5f15044567image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
//             },
//             "instagram_username": "icanshoottoo",
//             "total_collections": 3,
//             "total_likes": 40,
//             "total_photos": 32,
//             "accepted_tos": true,
//             "for_hire": true,
//             "social": {
//                 "instagram_username": "icanshoottoo",
//                 "portfolio_url": "http://icanshoottoo.com/",
//                 "twitter_username": "icanshoottoo",
//                 "paypal_email": null
//             }
//         },
//         "exif": {
//             "make": null,
//             "model": null,
//             "name": null,
//             "exposure_time": null,
//             "aperture": null,
//             "focal_length": null,
//             "iso": null
//         },
//         "location": {
//             "title": "Tysons, VA, USA",
//             "name": "Tysons, VA, USA",
//             "city": "Tysons",
//             "country": "United States",
//             "position": {
//                 "latitude": 38.918722,
//                 "longitude": -77.231092
//             }
//         },
//         "views": 90769,
//         "downloads": 833
//     }
// ]
