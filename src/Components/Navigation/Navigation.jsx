import React from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavbarText, NavLink } from "reactstrap";


import "./Navigation.css";
import { useContext } from "react";
import UserContext from "../UserContext";



/** Component for navigating
*/
function Navigation({ loggedIn,  handleLogout }) {

   const userData = useContext(UserContext)
 
   

  const linksIfLoggedIn = (
      <Navbar color="light" expand="md" light fixed="top" className="lh-1">
        <NavbarBrand href="/" className="h1">
          TotalRecall
        </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink  href="/" onClick={handleLogout}>
                Logout {`${userData.user}`}
             </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/garage/showcars">
              {`${userData.user}'s`} Cars
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            Peace of Mind in One Click
          </NavbarText>
      </Navbar>
  )


  const linksIfLoggedOut = (
      <Navbar color="light" expand="md" light fixed="top" className="lh-1">
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