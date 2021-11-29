import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

interface ModalProps {
  text: string;
  variant: "primary" | "secondary" | "danger";
  isSignupFlow: boolean;
}

const ErrorMessage = styled.span`
  color: red;
`;

const ModalComponent = ({ text, variant, isSignupFlow }: ModalProps) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [state, setState] = useContext(UserContext);

  const handleClick = async () => {
    setIsLoading(true);
    const signUpOrLogin = isSignupFlow ? "signup" : "login";

    const res = await axios.post(
      `http://localhost:8000/auth/${signUpOrLogin}`,
      {
        email,
        password,
      }
    );
    if (res.data.errors.length) {
      return setError(res.data.errors[0].msg);
    }

    setState({
      data: {
        id: res.data.data.id,
        email: res.data.data.email,
      },
      loading: false,
      error: null,
    });
    setIsLoading(false);
    localStorage.setItem("token", res.data.data.token);
    axios.defaults.headers.common["authorization"] = `Bearer ${res.data.token}`;
    navigate("/articles");
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant={variant}
        size="lg"
        style={{ marginRight: "1rem", padding: "0.5rem 3rem" }}
      >
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
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
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
