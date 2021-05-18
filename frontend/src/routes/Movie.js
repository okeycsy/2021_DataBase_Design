import MovieCard from "../components/MovieCard";
import MovieCard2 from "../components/MovieCard2";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive'

const ContainerStyle = {
  paddingTop: "9px",
  alignText: "center",
}

const RowStyle = { 
  padding: "10px",
  textAlign: "center",
}

const ColStyle = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
}

const Movie = () => {
  const isLargeWidth = useMediaQuery({
    query: '(min-width: 1366px)'
  })
  const isLargeHeight = useMediaQuery({
    query: '(min-height: 439px)'
  })

  return (
    <Container style={ContainerStyle}>
      {isLargeWidth&&isLargeHeight ? (
        <>
        <Row style={RowStyle}>
        <Col style={ColStyle}><MovieCard /></Col>
        <Col style={ColStyle}><MovieCard /></Col>
        <Col style={ColStyle}><MovieCard /></Col>
        <Col style={ColStyle}><MovieCard /></Col>
        <Col style={ColStyle}><MovieCard /></Col>
        </Row>
        </>
      ) : (
        <>
        <Row style={RowStyle}><Col style={ColStyle}><MovieCard2 /></Col></Row>
        <Row style={RowStyle}><Col style={ColStyle}><MovieCard2 /></Col></Row>
        <Row style={RowStyle}><Col style={ColStyle}><MovieCard2 /></Col></Row>
        <Row style={RowStyle}><Col style={ColStyle}><MovieCard2 /></Col></Row>
        <Row style={RowStyle}><Col style={ColStyle}><MovieCard2 /></Col></Row>
        </>
      )}
      
    </Container>
  )
}

export default Movie;