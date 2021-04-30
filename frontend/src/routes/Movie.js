import MovieCard from "../components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContainerStyle = {
  paddingTop: "9px",
  alignText: "center",
}

const RowStyle = { 
  padding: "10px",
}

const Movie = () => {
  return (
    <Container style={ContainerStyle}>
      <Row style={RowStyle} sm="auto">
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      </Row>
      <Row style={RowStyle}>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      </Row>
      <Row style={RowStyle}>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      </Row>
      <Row style={RowStyle}>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      </Row>
      <Row style={RowStyle}>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      </Row>
      <Row style={RowStyle}>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      <Col><MovieCard /></Col>
      </Row>
    </Container>
  )
}

export default Movie;