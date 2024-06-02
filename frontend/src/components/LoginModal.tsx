import { useState } from "react";
import { Button, FloatingLabel, Form, InputGroup, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainStyles from "../styles/Main.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginModalProps {
  onDismiss: () => void;
}

const LoginModal = ({onDismiss}: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false); 
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <p className="text-muted fs-5">Enter your master account details.</p>
          <Form.Group className="mb-3">
            <FloatingLabel label="Username" className="text-muted">
              <Form.Control type="text" placeholder="Username" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="py-3"
                />
                <Button
                  variant="secondary"
                  className={`text-secondary bg-white ${MainStyles.eyeBtn}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-secondary" />
                  ) : (
                    <FaEye className="text-secondary" />
                  )}
                </Button>
              </InputGroup>
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            className="mb-5 d-flex justify-content-between align-items-center"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Remember me" />
            <Link to={"/"}>Forgot Password?</Link>
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Login Now
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default LoginModal;
