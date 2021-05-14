import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const ScreenStyle = {
  backgroundColor: "#c8c8c8",
  color: "white",
  fontWeight: "900",
  fontSize: "x-large"
}

const Seat = styled.div`
  width: 24px;
  height: 20px;
  border: ${props => props.isSeat ? "1px solid black" : "None"};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 2px;
`

const AdminSeat = () => {
  const shape = seatShape.split('\\');


  return (
    <Container>
      <Row
        className="justify-content-md-center"
        style={ScreenStyle}
      >
        S C R E E N
      </Row>

      {shape.map((seatsString, index) => {
        const seatsArray = [...seatsString];
        return (
          <Row key={index}>
            {
              seatsArray.map((isSeat, index) => 
                <Seat key={index} isSeat={isSeat === "1" ? true : false} />)
            }
          </Row>
        )
      })}

      <Row>
        <Col>
          <Form>
            <Button onClick={() => console.log(shape)}>TEST</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default AdminSeat;

const seatShape = `
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
111101111110111101111\\
000000000000000001111
`;
