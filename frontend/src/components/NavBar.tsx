import { Navbar, NavbarBrand, Nav, Image } from "react-bootstrap"
import NavStyles from "../styles/Navbar.module.css"
import { Link } from "react-router-dom";
import NavbarLoggedOut from "./NavbarLoggedOut";

interface NavbarProps {
  onSignUpClicked: () => void,
  onLoginClicked: () => void
}

const NavBar = ({onSignUpClicked, onLoginClicked}: NavbarProps) => {
  return (
    <Navbar bg="primary" sticky="top" expand="sm" className="py-2 px-4">
      <NavbarBrand
        className="d-flex justify-content-center align-items-center gap-2"
        as={Link}
        to="/"
      >
        {/* <Image src="/shield-with-sword.svg" width={25} /> */}
        <Image src="/shield-24.png" width={35} />
        <span className="text-white fw-bold">EXCALIBUR</span>
      </NavbarBrand>
      <Navbar.Toggle
        aria-controls="main-navbar"
        className={`${NavStyles.whiteToggle}`}
      />
      <Navbar.Collapse id="main-navbar" className={`justify-content-end`}>
        <Nav className="gap-4">
          <NavbarLoggedOut
            onSignUpClicked={onSignUpClicked}
            onLoginClicked={onLoginClicked}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar