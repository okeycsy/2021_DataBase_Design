import React from 'react';
import ReactSwipe from 'react-swipe';
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from "../../components/MovieCard";

const SwipeContainer = styled.div`
  margin: 2%;
`

const SwipeButton = styled.button`
  margin: 10px;
  width: 40px;
  height: 40px;
  font-size: small;
  border: 0;
`

const SwipeImage = styled.img`
  width: 100%;
`

const Home = () => {
  const imageSrc = ["https://caching2.lottecinema.co.kr/lotte_image/2021/Spiral/0511/Spiral_1920774.jpg",
    "https://caching2.lottecinema.co.kr/lotte_image/2021/TheFast/0512/TheFast_1920774.jpg",
    "https://caching2.lottecinema.co.kr/lotte_image/2021/Voyagers/0504/Voyagers_1920774.jpg",
    "https://caching2.lottecinema.co.kr/lotte_image/2021/Conjuring/0602/Conjuring_1920774.jpg",
    "https://caching2.lottecinema.co.kr/lotte_image/2021/Ella/Ella_1920774.jpg"
  ];
  const movieData = [
    {title: "크루엘라", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202105/17387_103_1.jpg", rate: "12"},
    {title: "컨저링 3: 악마가 시켰다", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17420_103_1.jpg", rate: "15"},
    {title: "분노의 질주: 더 얼티메이트", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202005/15586_103_1.jpg", rate: "12"},
    {title: "극장판 귀멸의 칼날: 무한열차편", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202101/16908_103_1.jpg", rate: "15"},
    {title: "낫아웃", src: "https://caching.lottecinema.co.kr//Media/MovieFile/MovieImg/202106/17450_103_1.jpg", rate: "15"}
  ];

  let reactSwipeEl;

  return (
    <Container>
      <SwipeContainer>
        <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: true,
            auto: 3000,
            speed: 400,
            stopPropagation: false
          }}
          ref={el => (reactSwipeEl = el)}
        >

          {imageSrc.map((src, index) => 
            <div key={index}>
              <SwipeImage src={src} alt="img"/>
            </div>
          )}
        </ReactSwipe>

        <div style={{textAlign: "center"}}>
        <SwipeButton onClick={() => reactSwipeEl.prev()}>◀</SwipeButton>
        <SwipeButton onClick={() => reactSwipeEl.next()}>▶</SwipeButton>
        </div>
      </SwipeContainer>

      <Container>
        <Row>
        {movieData.map(data => 
        <Col>
          <MovieCard
            title={data.title}
            src={data.src}
            rate={data.rate}
          />
          </Col>
        )}
        </Row>
      </Container>

    </Container>

  );
};

export default Home;