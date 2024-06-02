import { useState } from "react";
import { Button, FloatingLabel, Form, InputGroup, Modal } from "react-bootstrap"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MainStyles from "../styles/Main.module.css"

interface SignUpModalProps {
  onDismiss: () => void
}

const SignUpModal = ({onDismiss}: SignUpModalProps) => {

  const [showPassword, setShowPassword] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <p className="text-muted fs-5">Create your Master Account.</p>
          <Form.Group className="mb-3">
            <FloatingLabel label="Username" className="text-muted">
              <Form.Control type="text" placeholder="Choose a Username" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel label="Email" className="text-muted">
              <Form.Control type="email" placeholder="Email" />
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
          <Form.Group className="mb-5" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              checked={termsChecked}
              label={
                <>
                  By signing up to create an account I accept the company's{" "}
                  <Link to={"/"}> Terms of Use & Privacy Policy</Link>
                </>
              }
              onChange={() => setTermsChecked(!termsChecked)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            size="lg"
            disabled={!termsChecked}
          >
            Sign Up Now
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default SignUpModal