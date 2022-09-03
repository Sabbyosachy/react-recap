import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import firebaseApp from "../Firebase/Firebaseinit";

const LogInEmail = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState();
  const [validated, setValidated] = useState(false);

  const handleEmailField = (event) => {
    setEmail(event.target.value);
  };

  //see written email or pass in console
  const handlePasswordField = (event) => {
    setPass(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      {/* onsubit use to stop reload page  */}
      <Form
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        className="pt-5 w-50 mx-auto"
      >
        <h3 className="text-primary mb-2">Please Register!!!!</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailField}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Provide An Valid Email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordField}
            type="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Provide A Valid Password.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default LogInEmail;
