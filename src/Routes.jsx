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



const Routes = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [message, setMessage] = useState("")
    const [notifType, setNotifType] = useState("")
   

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


    const getCurrentUser =  async() => {   
        let token = checkToken()
        let jwt = jwtDecode(token);
        await TotalRecallApi.getUser(jwt.username);
        updateUser(jwt.username)
        }


    const handleLogin = async(currentUser) => {
        try{
            let token = await TotalRecallApi.login(currentUser)
            localStorage.setItem("_token", token);
            setLoggedIn(true);
            setNotifType("success");
            setMessage(`Welcome to TotalRecall ${currentUser.username}`)
            
        } catch(error) {
            setNotifType("error")
            setMessage("Check your Username and Password")
            }
        }   
    
      
    const handleLogout = () => {
        try{
            localStorage.removeItem("_token");
            setLoggedIn(false);
            updateUser(null);
            setNotifType("success");
            setMessage("Bye. Come Again")
    

        } catch (error){
            setNotifType("error")
            setMessage("Error login you out. Try again")
            } finally {
                setNotifType(null)
            }
        }

    const handleRegistration = async(newUser) => {
        let token = await TotalRecallApi.registerUser(newUser); 
        localStorage.setItem("_token", token);
        setLoggedIn(true);
        }


    const handleNewCar = async(newCarData) => {
        try {
            await TotalRecallApi.addNewCar(newCarData);
            setNotifType("success");
            setMessage(`New Car ${newCarData.yearmodel}  ${newCarData.carmake}  ${newCarData.carmodel} Added `)

            } catch (error) {
                setNotifType("error");
                setMessage("Error with New Car Submission")
            } finally {
                setNotifType(null)
                }
     }
     
    const getCurrentUserCars = async() =>  {
       let username = jwtDecode(checkToken()).username
       await TotalRecallApi.getUserCars(username)
    }



    
    
    return(
        <BrowserRouter>
            <Navigation loggedIn = {loggedIn} handleLogout={handleLogout}/>
            <div className="main"> 
            <div>
                { notifType!== "" && <Notifications type={notifType} message={message}/> }
            </div>
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
                        { <Car getCurrentUserCars = { getCurrentUserCars } handleNewCar = { handleNewCar } /> } 
                    </Route>
                </Switch> 
            </div>

        </BrowserRouter>
        )
}
export default Routes; 