import axios from "axios";



const API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class TotalRecallApi {

  static async request(endpoint, parOrData = {}, action = "get") {
    parOrData._token = localStorage.getItem("_token");
    console.debug("API Call:", endpoint, parOrData, action);

    try {
      return (await axios({
        method: action,
        headers: {
          authorization: `${ parOrData._token }`
        }, 
        url: `${API_URL}${endpoint}`,
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

  static async login(userData) {
    console.log("userData when Login", userData)
    const res = await this.request("/auth/token", userData, "post");
    console.log("check user credentials", res);
    return res.token;
  }


  /** Registers user into database
   * accepts userdata {username, password}
   * returns token string on successful registration
   * throws error if not successful
   * */
  static async registerUser(userData) {

    const res = await this.request(`/auth/register`, userData, "post");
    return res.token;

  }

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








export default TotalRecallApi;