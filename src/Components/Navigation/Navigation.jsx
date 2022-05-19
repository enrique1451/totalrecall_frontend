import React from "react";
import UserContext from "../UserContext";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavbarText, NavLink } from "reactstrap";


import "./Navigation.css";
import { useContext } from "react";
import UserProvider from "../UserProvider";


/** Component for navigating
 *
 * Props:
 * - handleLogout = function run on parent
 *
 * State:
 * - none
 * 
 * Context:
 * - userData - an object like { username, fullname, email, isAdmin}

 *
 
 */
function Navigation({ loggedIn,  handleLogout }) {

   const {userData} = useContext(UserContext)
   console.log({userData})

  const linksIfLoggedIn = (
      <Navbar color="light" expand="md" light fixed="top">
        <NavbarBrand href="/">
          TotalRecall
        </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/" onClick={handleLogout}>
                Logout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/garage/showcars">
                Parking Garage
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            Peace of Mind in One Click
          </NavbarText>
      </Navbar>
  )


  const linksIfLoggedOut = (
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          TotalRecall
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">
                Register
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            Peace of Mind in One Click
          </NavbarText>
      </Navbar>

  )

  return(
    <div>
    {(loggedIn ? linksIfLoggedIn : linksIfLoggedOut )}
    </div>

  )
}


  


export default Navigation;