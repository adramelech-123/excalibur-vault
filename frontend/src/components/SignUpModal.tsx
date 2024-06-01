import { Modal } from "react-bootstrap"

interface SignUpModalProps {
  onDismiss: () => void
}

const SignUpModal = ({onDismiss}: SignUpModalProps) => {
  return (
    <Modal show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>
                Sign Up
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Sign Up Form
        </Modal.Body>
    </Modal>
  )
}
export default SignUpModal