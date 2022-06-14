import React, { useState, useEffect, useContext } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./Routes.css"


import Register from './Components/RegisterPage/Register';
import Login from "./Components/Login/Login";
import UserContext from "./Components/UserContext";
import TotalRecallApi from "./totalRecallAPI";
import Navigation from "./Components/Navigation/Navigation";
import Car from "./Components/CarGarage/Car";
import Notifications from "./Components/Notifications/Notifications";



const Routes = ()=> {
    const [loggedIn, setLoggedIn] = useState(false);
    const [message, setMessage] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [color, setColor] = useState(null)
   

    const { updateUser } = useContext(UserContext);
    console.log(useContext(UserContext))
    
    useEffect(() => {
        checkToken();
        if (loggedIn) {
            getCurrentUser()
        }
        // eslint-disable-next-line
    }, [loggedIn]);


    const checkToken = () => {
        let token = localStorage.getItem("_token");
        setLoggedIn(token ? true: false);
        return token;

    }


    async function getCurrentUser() {   
        let token = checkToken()
        let jwt = jwtDecode(token);
        console.log(jwt)
        await TotalRecallApi.getUser(jwt.username);
        updateUser(jwt.username)
        }


    async function handleLogin(currentUser) {

        try{
            let token = await TotalRecallApi.login(currentUser)
            localStorage.setItem("_token", token);
            setLoggedIn(true);
            setSuccess(true)
            setColor("success")

            setMessage("Welcome to TotalRecall")
            
            } catch(error) {
                setError(true)
                setColor("danger")
                setMessage("Check your Username and Password")

        }


        
        }
    
      
    const handleLogout = () => {
        localStorage.removeItem("_token");
        setLoggedIn(false);
        updateUser(null);
    }

    async function handleRegistration(newUser) {
        let token = await TotalRecallApi.registerUser(newUser); 
        localStorage.setItem("_token", token);
        setLoggedIn(true);
    }


    async function handleNewCar(newCarData) {
        try {
            let newCarAdded = await TotalRecallApi.addNewCar(newCarData);
            console.log(newCarAdded)
            setSuccess(true)
            setMessage(`New Car ${newCarData.yearmodel}  ${newCarData.carmake}  ${newCarData.carmodel} Added `)


            } catch (error) {
                setError(true)
                setMessage("Error with New Car Submission")
            }
        
    }

    async function getCurrentUserCars()  {
        let token = checkToken()
        let jwt = jwtDecode(token)
        let username = jwt.username
        console.log(username)
        
        await TotalRecallApi.getUserCars(username)
    }
    
    
    return(
        <BrowserRouter>
            <Navigation loggedIn = {loggedIn} handleLogout={handleLogout}/>
            <div className="main"> 
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/register" />
                    </Route>
                    <Route exact path = "/register">
                        {!loggedIn ? <Register handleRegistration = {handleRegistration} /> : <Redirect to="/garage/showcars"/> }
                    </Route>
                    <Route exact path="/login">
                        {!loggedIn ?  <Login handleLogin = {handleLogin} handleLogout = {handleLogout} /> : <Redirect to="/garage/showcars" />}
                    </Route>
                
                    <Route exact path="/garage/showcars">
                        { <Car getCurrentUserCars = { getCurrentUserCars } handleNewCar = { handleNewCar }/> } 
                    </Route>
                </Switch> 
            </div>
            <div>
                {success && <Notifications color={success} message={message}/>}
                {error && <Notifications color={error} message={message}/>}
             </div>

        </BrowserRouter>
    )
}
export default Routes; 