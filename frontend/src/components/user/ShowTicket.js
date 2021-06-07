import { Container, Row, Col, Figure } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerStyle = {
  width: "700px",
  border: "1px solid black",
  borderRadius: "5px"
}

const ColStyle = {
  padding: "15px"
}

const ImageStyle = {
  borderRadius: "5px",
  marginBottom: "0px"
}

const TitleStyle = {
  fontSize: "xx-large",
  borderTop: "3px solid black",
  borderBottom: "3px solid black",
  width: "90%",
  padding: "5px"
}

const ContentStyle = {
  fontSize: "large",
  padding: "5px"
}

const BrRowStyle = {
  margin: "15px"
}

const ShowTicket = ({ title, cinema, time, seats, src, runningTime }) => {
  return (
    <Container style={ContainerStyle}>
      <Row>
        <Col style={ColStyle}>

          <Figure.Image
            src={src}
            width={256}
            style={ImageStyle}
          />

        </Col>

        <Col style={ColStyle}>
          <Row style={TitleStyle}>{title}</Row>
          
          <Row style={BrRowStyle} />
          
          <Row style={ContentStyle}>{cinema} {time.split(' ')[0]}</Row>
          <Row style={ContentStyle}>{time.split(' ')[1] + " (" + ['일', '월', '화', '수', '목', '금', '토'][new Date(time.split(' ')[1]).getDay()] + ")"}</Row>
          <Row style={ContentStyle}>{time.split(' ')[2] + " (" + runningTime + "분)"}</Row>

          <Row style={BrRowStyle} />

          <Row style={ContentStyle}>{seats.map(seat => seat + '번 ')}</Row>

          <Row style={BrRowStyle} />

          <Row style={ContentStyle}>{seats.length}명</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowTicket;