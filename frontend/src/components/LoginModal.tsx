/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { LoginCredentials } from "../api/network";
import * as Api from "../api/network"
import { Alert, Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import TextInputField from "./Forms/TextInputField";
import { Link } from "react-router-dom";
import MainStyles from "../styles/Main.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { User } from "../models/user";

interface LoginModalProps {
  onDismiss: () => void;
  onLoginSuccessful: (user: User) => void;
}

const LoginModal = ({onDismiss, onLoginSuccessful}: LoginModalProps) => {

  const [errorText, setErrorText] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<LoginCredentials>();

  const onSubmit = async (credentials: LoginCredentials) => {
    try {
      const user = await Api.login(credentials)
      onLoginSuccessful(user);
    } catch (error) {
      if (error) {
        setErrorText("Login failed! Insert correct crredentials.");
      } else {
        alert(error);
      }
      console.error(error);
    }
  }


  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {errorText && <Alert variant="danger">{errorText}</Alert>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-muted fs-5">Enter your master account details.</p>

          <Form.Group className="mb-3">
            <FloatingLabel label="Username" className="text-muted">
              <TextInputField
                name="username"
                type="text"
                placeholder="Username"
                register={register}
                registerOptions={{ required: "Username field is required!" }}
                error={errors.username}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3">
            <FloatingLabel label>
              <TextInputField
                name="password"
                inputGroup={true}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`py-3 ${MainStyles.inputField}`}
                register={register}
                registerOptions={{ required: "Password field is required!" }}
                error={errors.password}
              >
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
              </TextInputField>
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
