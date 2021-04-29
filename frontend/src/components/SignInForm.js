import React, { useState, useRef } from "react";
import { useEffectOnce } from "react-use";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { post } from "axios";

const ContainerStyle = {
    display: "table",
    maxWidth: "693px",
    border: "2px solid #A9A9A9",
    borderRadius: "15px",
    padding: "20px",
    justifyContent: "center"
}

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin: 20px auto;
`

const SignInForm = () => {
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  const idInput = useRef(null);
  useEffectOnce(() => {
    if(idInput.current) idInput.current.focus();
  });

  return (
    <Container style={ContainerStyle}>
      <Form>
        <Row><Col>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control ref={idInput} type="text" placeholder="Enter ID" onChange={e => setID(e.target.value)} />
        </Form.Group>
        </Col></Row>

        <Row><Col>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" onChange={e => setPW(e.target.value)} />
        </Form.Group>
        </Col></Row>

        <Row><Col>
        <SubContainer>
          <Button variant="dark" type="submit" style={{marginBottom: "15px"}}>
              Sign In
          </Button>
          <Link to="/signup">Sing Up</Link>
          <Link to="findinfo">Forgot ID or PW?</Link>
        </SubContainer>
        </Col></Row>
      </Form>
    </Container>
  )
}

export default SignInForm;