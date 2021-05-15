import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ScreenStyle = {
  backgroundColor: "#c8c8c8",
  color: "white",
  fontWeight: "900",
  fontSize: "x-large",
  marginBottom: "10px"
}

const Seat = styled.div`
  width: 24px;
  height: 20px;
  border: ${props => props.isSeat ? "1px solid black" : "None"};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 2px;
  font-size: small;
  font-weight: 300;
  text-align: center;
`

const AdminSeat = () => {
  const shape2 = JSON.parse(seatShape2);

  const selectSeat = (target) => {
    if (target.id === "") return;
    
    const seat = document.getElementById(target.id);
    if(!seat.isSelected) {
      seat.style.backgroundColor = "red";
    } else {
      seat.style.backgroundColor = "white";
    }
    seat.isSelected = !seat.isSelected;
  }

  return (
    <Container style={{border: "1px solid"}}>
      <Container style={{border: "1px solid"}}>
        <Row
          className="justify-content-md-center"
          style={ScreenStyle}
        >
          S C R E E N
        </Row>

        {shape2.map((seatsArray, index) => {
          return (
            <Row key={index} className="justify-content-md-center">
              {seatsArray.map((seat, index) => 
                <Seat
                  key={index}
                  isSeat={seat !== "" ? true : false}
                  id={seat !== "" ? seat : ""}
                  onClick={(e) => selectSeat(e.target)}
                >
                  {seat}
                </Seat>
              )}
            </Row>
          )
        })}
      </Container>


      <Container style={{border: "1px solid"}}>
        

        <Row style={{border: "1px solid red"}}>
          <Col>
          <Form.Control as="select">
            <option>서울</option>
            <option>경기/인천</option>
          </Form.Control>
          </Col>
          <Col>
          <Form.Control as="select">
            <option>짱짱지점</option>
            <option>최고지점</option>
          </Form.Control>
          </Col>
          <Col>
          <Form.Control as="select">
            <option>1관</option>
            <option>2관</option>
          </Form.Control>
          </Col>
        </Row>

        <Row>
          <Col>
          <Button>Update</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
};

export default AdminSeat;

const seatShape2 = `[["A1", "A2", "A3", "A4", "", "A5", "A6", "A7", "A8", "A9", "A10", "", "A11", "A12", "A13", "A14", "", "A15", "A16", "A17", "A18"],\
  ["B1", "B2", "B3", "B4", "", "B5", "B6", "B7", "B8", "B9", "B10", "", "B11", "B12", "B13", "B14", "", "B15", "B16", "B17", "B18"],\
  ["C1", "C2", "C3", "C4", "", "C5", "C6", "C7", "C8", "C9", "C10", "", "C11", "C12", "C13", "C14", "", "C15", "C16", "C17", "C18"],\
  ["D1", "D2", "D3", "D4", "", "D5", "D6", "D7", "D8", "D9", "D10", "", "D11", "D12", "D13", "D14", "", "D15", "D16", "D17", "D18"],\
  ["E1", "E2", "E3", "E4", "", "E5", "E6", "E7", "E8", "E9", "E10", "", "E11", "E12", "E13", "E14", "", "E15", "E16", "E17", "E18"],\
  ["F1", "F2", "F3", "F4", "", "F5", "F6", "F7", "F8", "F9", "F10", "", "F11", "F12", "F13", "F14", "", "F15", "F16", "F17", "F18"],\
  ["G1", "G2", "G3", "G4", "", "G5", "G6", "G7", "G8", "G9", "G10", "", "G11", "G12", "G13", "G14", "", "G15", "G16", "G17", "G18"],\
  ["H1", "H2", "H3", "H4", "", "H5", "H6", "H7", "H8", "H9", "H10", "", "H11", "H12", "H13", "H14", "", "H15", "H16", "H17", "H18"],\
  ["I1", "I2", "I3", "I4", "", "I5", "I6", "I7", "I8", "I9", "I10", "", "I11", "I12", "I13", "I14", "", "I15", "I16", "I17", "I18"],\
  ["J1", "J2", "J3", "J4", "", "J5", "J6", "J7", "J8", "J9", "J10", "", "J11", "J12", "J13", "J14", "", "J15", "J16", "J17", "J18"],\
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "K15", "K16", "K17", "K18"]]`
