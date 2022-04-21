import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavbarText, NavLink } from "reactstrap";

import "./Navigation.css";


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
 * App -> Navigation -> NavLink
 */
function Navigation({ loggedIn, handleLogout }) {

  const linksIfLoggedIn = (
      <Navbar color="light" expand="md" light >
      <NavbarBrand href="/">
        TotalRecall
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          Peace of Mind in One Click
        </NavbarText>
      </Collapse>
      </Navbar>
  )


  const linksIfLoggedOut = (
      <Navbar color="light" expand="md" light >
      <NavbarBrand href="/">
        TotalRecall
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
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
      </Collapse>
      </Navbar>

  )

  return(
    <div>
    {(loggedIn ? linksIfLoggedIn : linksIfLoggedOut )}
    </div>

  )
}


  


export default Navigation;