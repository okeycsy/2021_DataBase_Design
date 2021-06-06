import { useState } from "react";
import { Figure, Modal, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const FigureStyle = {
  boxShadow: "0 13px 27px -5px rgba(50, 50, 75, 0.75), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025)",
  padding: "7px",
  borderRadius: "5px",
  position: "relative",
}

const FigureImageStyle = {
  borderRadius: "5px",
  zIndex: "1",
  height: "23vh"
}

const FigureTitleStyle = {
  textAlign: "center",
}

// const FigureDiscriptionStyle = {
//   textAlign: "center",
//   fontSize: "0.7rem",
// }

const Rate = styled.span`
  z-index: 2;
  position: absolute;
  top: 14px;
  right: 12px;

  background-color: ${props => props.color};

  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  border-radius: 50%;
  font-size: 0;
  text-align: center;
  vertical-align: middle;
  
  margin-left: -1px;
  font-size: 11px;
  font-weight: bold;
  color: #FFF;
  white-space: nowrap;
`

const MovieCard = ({title, src, rate, genre, time, director, actor}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let RateColor = "#5BC77E"
  if (rate === "12") RateColor="#4DD6FF";
  else if (rate === "15") RateColor="#FFC134";
  else if (rate === "18") RateColor="#ED4C6B";
  // #5BC77E #4DD6FF #FFC134 #ED4C6B
  return (
    <>
    <Figure style={FigureStyle} onClick={handleShow}>
      <Rate color={RateColor}>{rate==="18" ? "청불" : rate}</Rate>
      <Figure.Image
        src={src}
        alt="poster"
        style={FigureImageStyle}
      />
      <Figure.Caption style={FigureTitleStyle}>
        {title.length < 10 ? title : title.slice(0, 10) + "..."}
      </Figure.Caption>
    </Figure>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={5}>
                <Figure.Image
                  src={src}
                  alt="poster"
                  style={FigureImageStyle}
                />
              </Col>
              <Col>
                <p style={{fontSize: "small"}}>장르: {genre}</p>
                <p style={{fontSize: "small"}}>감독: {director}</p>
                <p style={{fontSize: "small"}}>출연: {actor}</p>
                <p style={{fontSize: "small"}}>상영시간: {time}분</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark">Ticketing</Button>
          <Button variant="light" onClick={handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
};

export default MovieCard;