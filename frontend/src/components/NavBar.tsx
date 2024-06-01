import { Navbar, NavbarBrand, Nav, Image } from "react-bootstrap"
import NavStyles from "../styles/Navbar.module.css"
const NavBar = () => {
  return (
    <Navbar bg="primary" sticky="top" expand="sm" className="py-2 px-4">
      <NavbarBrand className="d-flex justify-content-center align-items-center">
        <Image src="public/shield-24.png" width={35} />
        <span className="text-white fw-bold">EXCALIBUR</span>
      </NavbarBrand>
      <Navbar.Toggle
        aria-controls="main-navbar"
        className={`${NavStyles.whiteToggle}`}
      />
      <Navbar.Collapse id="main-navbar" className={`justify-content-end`}>
        <Nav className="gap-4">
          <Nav.Link className="text-white fs-4">Login</Nav.Link>
          <Nav.Link className="text-white fs-4">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar