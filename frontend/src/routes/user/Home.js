import React from 'react';
import ReactSwipe from 'react-swipe';
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MovieCard from "../../components/MovieCard";

import MovieData from "../../components/MovieData";

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
        {MovieData.slice(0,5).map(data => 
        <Col>
          <MovieCard
            title={data.title}
            src={data.src}
            rate={data.rate}
            genre={data.genre}
            time={data.time}
            director={data.director}
            actor={data.actor}
          />
          </Col>
        )}
        </Row>
      </Container>

    </Container>

  );
};

export default Home;