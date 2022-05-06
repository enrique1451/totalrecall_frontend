import axios from "axios";



const NHT_URL = process.env.RECALLS_BASE_URL || "https://api.nhtsa.gov/recalls/recallsByVehicle";


class NHTSARecallApi {

  static async request(endpoint, parOrData = {}, action = "get") {
    // parOrData._token = localStorage.getItem("_token");
    console.debug("API Call:", endpoint, parOrData, action);

    try {
      return (await axios({
        method: action,
        headers: {
          // authorization: `${ parOrData._token }`
        }, 
        url: `${NHT_URL}${endpoint}`,
        [action === "get" ? "params" : "data"]: parOrData, 
      })).data;

    } catch (err) {
      console.error("API Error:", err.response);
      let message = err?.response?.data?.message;
      console.debug(err, message)
      throw Array.isArray(message) ? message : [message];
    }
    
  }

  // Individual API routes
  //  Logs in user by using correct credentials.




  static async getUser(username) {
    console.log("Current User", username)
    const res = await this.request(`/users/${username}`);
    return res.user;
  }

  static async addNewCar(newCarData, username) {
    console.debug(" Car Data------> ", newCarData)

    const res = await this.request(`/cars/garage`, newCarData, "post")
    console.log("Car Data", res);
    return res.user;
  }

  static async getUserGarage() {
    const res = await this.request(`/cars/garage/showcars`) 
    return res.cars
      
  }
  

  }

  








export default NHTSARecallApi;