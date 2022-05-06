import axios from "axios";



const API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class TotalRecallApi {

  static async request(endpoint, parOrData = {}, action = "get") {
    parOrData._token = localStorage.getItem("_token");
    console.debug("API Call:", endpoint, parOrData, action);

    if (endpoint !== "/recalls/recallsByVehicle/") {
      try {
        return (await axios({
          method: action,
          headers: {
            authorization: `${ parOrData._token }`
            },
            url: `${API_URL}${endpoint}`,
            [action === "get" ? "params" : "data"]: parOrData })).data;
            
    } catch (err) {
        console.error("API Error:", err.response);
        let message = err?.response?.data?.message;
        console.debug(err, message)
        throw Array.isArray(message) ? message : [message];
    } 
    
  } else  {
    
    try {
      return (await axios({
        method: 'get',
        url: `${API_URL}${endpoint}`,
        query: parOrData })).data;

      } catch (err) {
          console.error("API Error:", err.response);
          let message = err?.response?.data?.message;
          console.debug(err, message)
          throw Array.isArray(message) ? message : [message];
        } 
      }
  }

  // Individual API routes
  //  Logs in user by using correct credentials.

  static async login(userData) {
    const res = await this.request("/auth/token", userData, "post");
    return res.token;
  }


  /** Registers user into database
   * accepts userdata {username, password}
   * returns token string on successful 
   * registration throws error if not successful
   * */

  static async registerUser(userData) {
    const res = await this.request(`/auth/register`, userData, "post");
    return res.token;
  }

  static async getUser() {
    const res = await this.request(`/users`);
    return res.user;
  }

  /** Adds cars into database
   * accepts {Year Model, Car Make,  Car Model}
   * throws error if not successful
   * */  

  static async addNewCar(newCarData) {
    const res = await this.request(`/cars/garage`, newCarData, "post")
    return res.user;
  }
 
  static async getUserCars() {
    const res = await this.request(`/cars/garage/showcars`) 
    this.getCarsRecalls()
    return res.cars
  }

  static async getCarsRecalls(carsData) {
    console.log("totalRecallApi getCarsRecalls", carsData)
    
    const res = await this.request("cars/recalls/recallsByVehicle/", carsData, "get");
    
    
    return res.recalls
  }

}

export default TotalRecallApi;
