import { Button } from "bootstrap";
import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./Login.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

function Login(props) {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegistrations = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(user);
  };
  return (
    <div>
      <div className="container w-50">
        {user.email && (
          <div>
            <h3>Hello {user.name}</h3>
          </div>
        )}
        <h3>Sign In Using Email and Password</h3>
        <Form onSubmit={handleRegistrations}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onBlur={emailChangeHandler}
                type="email"
                placeholder="email@example.com"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onBlur={passwordChangeHandler}
                type="password"
                placeholder="Password"
                required
              />
            </Col>
          </Form.Group>
          <button type="submit">Register</button>
        </Form>
        <br></br>
        <h3>-------- Or ---------</h3>
        <button onClick={handleGoogleLogin}>Sign In Using Google</button>
      </div>
    </div>
  );
}

export default Login;
