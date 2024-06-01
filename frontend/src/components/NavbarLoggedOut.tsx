import { Nav } from "react-bootstrap";

interface NavbarLoggedOutProps {
    onSignUpClicked: () => void,
    onLoginClicked: () => void
}
const NavbarLoggedOut = ({onSignUpClicked, onLoginClicked}: NavbarLoggedOutProps) => {
  return (
    <>
      <Nav.Link onClick={onLoginClicked} className="text-white fs-4">
        Login
      </Nav.Link>
      <Nav.Link onClick={onSignUpClicked} className="text-white fs-4">
        Sign Up
      </Nav.Link>
    </>
  );
}
export default NavbarLoggedOut