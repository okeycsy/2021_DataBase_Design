import { useState } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Ticket = () => {
  const [step, setStep] = useState(0);
  const [ticketInfo, setTicketInfo] = useState({
    cinema: "",
    movie: "",
    datetime: "",
    seat: []
  });

  const prevDisabled = step === 0;
  const nextDisabled = (step === 0 && ticketInfo.cinema === "" || ticketInfo.movie === "" || ticketInfo.datetime === "")

  return (
    <Container>
       <Row>
           <Col>sdf</Col>
       </Row>

      <Row>
        <Col><Button disabled={prevDisabled}>Prev</Button></Col>
        <Col><Button disabled={nextDisabled}>Next</Button></Col>
      </Row>

      <Row>
        <Col><ProgressBar now={step * 25} variant="dark"/></Col>
      </Row>
    </Container>
  )
};

export default Ticket;

// 0
// 지역 -> 지점
// 영화
// 날짜 -> 시간

// 1 좌석

// 2 결제

// 3 완료