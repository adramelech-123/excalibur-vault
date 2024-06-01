import { Modal } from "react-bootstrap";

interface LoginModalProps {
  onDismiss: () => void;
}

const LoginModal = ({onDismiss}: LoginModalProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>Login Form</Modal.Body>
    </Modal>
  );
};
export default LoginModal;
