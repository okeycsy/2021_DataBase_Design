import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScheduleManagementContext } from "../../routes/admin/AdminSchedule";


const SelectCinema = () => {
  const {schedule, setSchedule} = useContext(ScheduleManagementContext);
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const regions = ["서울", "경기/인천", "강원", "충청", "전라", "경상", "제주"];
  const cinemas = {
    "서울":["a", "b"], "경기/인천":["1", "2"], "강원":[], "충청":[], "전라":[], "경상":[], "제주":[]
  };

  return (
    <Container>
      <Row>
        <Col>
          {regions.map((region, index) => 
            <Button key={index} onClick={() => setSelectedRegion(region)}>{region}</Button>)}
        </Col>
      </Row>
      <Row>
        <Col>
          {cinemas[selectedRegion].map((cinema, index) =>
            <Button onClick={() => setSchedule({...schedule, cinema:cinema})} key={index}>{cinema}</Button>)}
        </Col>
      </Row>
    </Container>
  )
};

const SelectTheater = () => {
  const {schedule, setSchedule} = useContext(ScheduleManagementContext);
  const theaters = {
    "a": [1, 2, 3],
    "b": [1, 2, 3, 4],
    "1": [1, 2],
    "2": [1, 2, 3, 4, 5, 6]
  };

  return (
    <Container>
      <Row>
        <Col>
          {theaters[schedule.cinema].map((theater, index) =>
            <Button onClick={() => setSchedule({...schedule, theater:theater})} key={index}>{theater}</Button>)}
        </Col>
      </Row>
    </Container>
  )
};

const SelectMovie = () => {
  const {schedule, setSchedule} = useContext(ScheduleManagementContext);
  const movies = {
    "test1": 10,
    "test2": 20
  }

  return (
    <Container>
      <Row>
        <Col>
          {Object.keys(movies).map((movie, index) => 
            <Button onClick={() => setSchedule({...schedule, movie:movie})} key={index}>{movie}</Button>)}
        </Col>
      </Row>
    </Container>
  )
};

const SelectStartTime = () => {
  return (
    <p>selectStartTime</p>
  )
};

const CheckResult = () => {
  return (
    <p>checkResult</p>
  )
};

export { SelectCinema, SelectTheater, SelectMovie, SelectStartTime, CheckResult }