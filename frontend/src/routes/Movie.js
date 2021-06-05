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
  const movieData = [
    {title: "크루엘라", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17387_103_1.jpg", rate: "12"},
    {title: "컨저링 3: 악마가 시켰다", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17420_103_1.jpg", rate: "15"},
    {title: "분노의 질주: 더 얼티메이트", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202005/15586_103_1.jpg", rate: "12"},
    {title: "극장판 귀멸의 칼날: 무한열차편", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202101/16908_103_1.jpg", rate: "15"},
    {title: "낫아웃", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17450_103_1.jpg", rate: "15"},
    {title: "프로페서 앤 매드맨", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17428_103_1.jpg", rate: "15"},
    {title: "파이프라인", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17374_103_1.jpg", rate: "15"},
    {title: "도라에몽: 스탠바이미 2", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17296_103_1.jpg", rate: "ALL"},
    {title: "극장판 콩순이: 장난감나라 대모험", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17213_103_1.jpg", rate: "ALL"},
    {title: "크루즈 패밀리: 뉴에이지", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17201_103_1.jpg", rate: "ALL"},
    {title: "보이저스", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17322_103_1.jpg", rate: "15"},
    {title: "썰", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17457_103_1.jpg", rate: "18"}
  ];
  const isLargeWidth = useMediaQuery({
    query: '(min-width: 1366px)'
  })
  const isLargeHeight = useMediaQuery({
    query: '(min-height: 439px)'
  })

  return (
    <Container style={ContainerStyle}>
      <Row>
        {movieData.map(data => 
        <Col md={3}>
          <MovieCard
            title={data.title}
            src={data.src}
            rate={data.rate}
          />
          </Col>
        )}
        </Row>
      {/* {isLargeWidth&&isLargeHeight ? (
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
      )} */}
      
    </Container>
  )
}

export default Movie;