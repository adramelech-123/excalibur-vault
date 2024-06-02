import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

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
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control type="text" placeholder="Choose a Username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" />
              <Button className="bg-white border-secondary " onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className="text-secondary"/> : <FaEye className="text-secondary"/>}
              </Button>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              checked={termsChecked}
              label="I agree to the Terms & Conditions"
              onChange={() => setTermsChecked(!termsChecked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!termsChecked}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default SignUpModal