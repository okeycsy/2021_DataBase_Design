import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const RowBlockStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  border: "1px solid #B0B0B0",
  borderRadius: "5px"
  }

const ButtonBox = styled.div`
  float:right;
`

const CustomerManagement = () => {
  const [inputID, setInputID] = useState("");
  const [selectedID, setSelectedID] = useState("");
  const [listID, setListID] = useState(["A", "B", "C"]);

  return (
    <Container>
      
      <Row style={RowBlockStyle}>
        <Col>
          <Form.Label>ID</Form.Label>
          <ButtonBox><Button variant="dark">Search</Button></ButtonBox>
          <Form.Control onChange={e => setInputID(e.target.value)}/>
        </Col>
      </Row>

      <Row style={RowBlockStyle}>
        <Col>
          <Form.Label>List</Form.Label>
          <Form.Control onChange={e => setSelectedID(e.target.value)} as="select" multiple>
            {listID.map((id, index) => <option key={index}>{id}</option>)}
          </Form.Control>
        </Col>
      </Row>

      <Row style={RowBlockStyle}>
        <Col>
          {selectedID}
        </Col>
      </Row>

    </Container>
  )
}

export default CustomerManagement;