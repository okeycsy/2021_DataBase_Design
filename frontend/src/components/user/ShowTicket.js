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

const ShowTicket = ({ setTicketInfo }) => {
  return (
    <Container style={ContainerStyle}>
      <Row>
        <Col style={ColStyle}>

          <Figure.Image
            src='https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202104/17134_103_1.jpg'
            width={256}
            style={ImageStyle}
          />

        </Col>

        <Col style={ColStyle}>
          <Row style={TitleStyle}>더 스파이</Row>
          
          <Row style={BrRowStyle} />
          
          <Row style={ContentStyle}>시립대점 2021.05.19(수)</Row>
          <Row style={ContentStyle}>09:00 ~ 23:00</Row>

          <Row style={BrRowStyle} />

          <Row style={ContentStyle}>123관</Row>
          <Row style={ContentStyle}>A열 23번, B열 41번</Row>

          <Row style={BrRowStyle} />

          <Row style={ContentStyle}>일반 2명</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowTicket;