import axios from "axios";

const recallsClient = axios.create({

    NHT_URL: "https://api.nhtsa.gov/product/vehicle"
    
});

export default recallsClient; 


