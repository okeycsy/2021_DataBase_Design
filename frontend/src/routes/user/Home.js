import React from 'react';
import ReactSwipe from 'react-swipe';
import styled from "styled-components";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  border: 1px solid black;
`

const Home = () => {
  const imageSrc = ["https://caching2.lottecinema.co.kr/lotte_image/2021/Spiral/0511/Spiral_1920774.jpg",
    "https://caching2.lottecinema.co.kr/lotte_image/2021/TheFast/0512/TheFast_1920774.jpg",
    "https://caching2.lottecinema.co.kr/lotte_image/2021/Voyagers/0504/Voyagers_1920774.jpg"
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


    </Container>

  );
};

export default Home;