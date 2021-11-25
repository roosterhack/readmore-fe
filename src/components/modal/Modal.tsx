import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
// import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../context";

interface ModalProps {
  text: string;
  variant: "primary" | "secondary" | "danger";
  isSignupFlow: boolean;
}

const ErrorMessage = styled.p`
  color: red;
`;

export const ModalComponent = ({ text, variant, isSignupFlow }: ModalProps) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const navigate = useNavigate();

  return (
    <>
      <Button
        variant={variant}
        size="lg"
        style={{ marginRight: "1rem" }}
        onClick={() => setShow(true)}
      >
        {text}
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>{text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <FormControl
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Password</InputGroup.Text>
            <FormControl
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary">{text}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
