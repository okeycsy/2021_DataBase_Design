import React, { useState, useRef } from "react";
import { useEffectOnce } from "react-use";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserData from "../components/UserData";


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

  const setUser = () => {
    window.localStorage.setItem("db_design_user_id", id);
    window.localStorage.setItem("db_design_user_pw", pw);
  }

  const checkUser = () => {
    let flag = false;
    for(let i = 0; i < UserData.length; i++) {
      if (UserData[i].id === id && UserData[i].pw === pw) {
        flag = true;
        break;
      }
    }

    if (flag) {
      setUser();
      window.location.href = "/";
    } else {
      alert("잘못된 ID 혹은 PW입니다.");
    }
  }


  return (
    <Container style={ContainerStyle}>
      <Form>
        <Row><Col>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control ref={idInput} type="text" placeholder="Enter ID" onChange={e => setID(e.target.value)} value={id}/>
        </Form.Group>
        </Col></Row>

        <Row><Col>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" onChange={e => setPW(e.target.value)} value={pw}/>
        </Form.Group>
        </Col></Row>

        <Row><Col>
        <SubContainer>
          <Button variant="dark" type="button" style={{marginBottom: "15px"}} onClick={() => checkUser()}>
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