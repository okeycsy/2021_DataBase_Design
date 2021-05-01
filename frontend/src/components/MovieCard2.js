import { Figure, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styled from "styled-components";

const FigureStyle = {
  boxShadow: "0 13px 27px -5px rgba(50, 50, 75, 0.75), 0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025)",
  padding: "7px",
  borderRadius: "5px",
  position: "relative",
  display: "flex",
  flexDirection: "row",
  width: "70vw",
}

const FigureImageStyle = {
  borderRadius: "5px",
  zIndex: "1",
  height: "23vh"
}

const FigureTitleStyle = {
  textAlign: "left",
}

const FigureDiscriptionStyle = {
  textAlign: "left",
  fontSize: "0.7rem",
}

const Rate = styled.span`
  z-index: 2;
  position: absolute;
  top: 14px;
  left: 12px;

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

const MovieCard = () => {
  const RateColor = "#ED4C6B"
  // #5BC77E #4DD6FF #FFC134 #ED4C6B
  return (
    <Link to="/movie/123">
    <Figure style={FigureStyle}>
      <Rate color={RateColor}>{"청불"}</Rate>
      <Figure.Image
        src='https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202104/17134_103_1.jpg'
        alt="더 스파이"
        style={FigureImageStyle}
      />
      <Container>
      <Figure.Caption style={FigureTitleStyle}>더 스파이</Figure.Caption>
      <Figure.Caption style={FigureTitleStyle}>더 스파이</Figure.Caption>
      </Container>
    </Figure>
    </Link>
  )
};

export default MovieCard;