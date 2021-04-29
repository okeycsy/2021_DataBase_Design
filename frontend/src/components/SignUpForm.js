import React, {useState} from "react";

import { Form, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUpForm() {
  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4">
          <Form.Label>ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="ID"
          />
          <Form.Control.Feedback type="invalid">
            사용 불가능한 ID입니다.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="E-mail"
          />
          <Form.Control.Feedback type="invalid">
            E-mail 형식이 맞지 않습니다.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">
            사용 불가능한 Password입니다.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Confirm Password"
          />
          <Form.Control.Feedback type="invalid">
            비밀번호가 일치하지 않습니다.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">
            필수 항목입니다.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="010XXXXXXXX"
          />
          <Form.Control.Feedback type="invalid">
            필수 항목입니다.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            required
            type="date"
          />
          <Form.Control.Feedback type="invalid">
            필수 항목입니다.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>

      <Form.Row>
        <Button type="submit" variant="dark">Submit</Button>
        <Button type="submit" variant="light">Cancel</Button>
      </Form.Row>
    </Form>
    );
  }
  
export default SignUpForm;