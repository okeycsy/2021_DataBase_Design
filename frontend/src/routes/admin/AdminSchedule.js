import { createContext, useState } from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { SelectCinema, SelectTheater, SelectMovie, SelectStartTime, CheckResult } from "../../components/admin/AdminScheduleComponents";

export const ScheduleManagementContext = createContext();

const AdminSchedule = () => {
  const [schedule, setSchedule] = useState({
    "cinema": "",
    "theater": "",
    "movie": "",
    "startTime": ""
  });

  const [step, setStep] = useState(0);

  const nextHandler = () => {
    if(step < 4) setStep(step + 1);
  }
  const prevHandler = () => {
    if(step > 0) setStep(step - 1);
  }

  return (
    <Container>
      <Row>
        <Col>
          <p>cinema: {schedule.cinema}</p>
          <p>theater: {schedule.theater}</p>
          <p>movie: {schedule.movie}</p>
          <p>startTime: {schedule.startTime}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ScheduleManagementContext.Provider value={{schedule, setSchedule}}>
            
            {step === 0 ? <SelectCinema/> : <></>}
            {step === 1 ? <SelectTheater/> : <></>}
            {step === 2 ? <SelectMovie/> : <></>}
            {step === 3 ? <SelectStartTime/> : <></>}
            {step === 4 ? <CheckResult/> : <></>}
          </ScheduleManagementContext.Provider>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            onClick={prevHandler}
            disabled={step === 0}
            variant="dark"
          >
            Prev
          </Button></Col>
        <Col>
          <Button
            onClick={nextHandler}
            disabled={
              (step === 0 && schedule.cinema === "") ||
              (step === 1 && schedule.theater === "") ||
              (step === 2 && schedule.movie === "") ||
              (step === 3 && schedule.startTime === "")
            }
            variant="dark"
          >
            Next
          </Button>
        </Col>
      </Row>
      <Row>
        <Col><ProgressBar now={step * 25} variant="dark"/></Col>
      </Row>
    </Container>
  )
}

export default AdminSchedule;

// 0. 영화관 선택: 지역 선택 -> 영화관 선택
// 1. 상영관 선택
// 3. 영화 선택
// 4. 시작시간 선택
