import MovieCard from "../components/MovieCard";
// import MovieCard2 from "../components/MovieCard2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useMediaQuery } from 'react-responsive'

import MovieData from "../components/MovieData";

import { useState } from "react";

const ContainerStyle = {
  paddingTop: "9px",
  alignText: "center",
}

// const RowStyle = { 
//   padding: "10px",
//   textAlign: "center",
// }

// const ColStyle = {
//   textAlign: "center",
//   display: "flex",
//   justifyContent: "center",
// }

const Movie = () => {
  // const isLargeWidth = useMediaQuery({
  //   query: '(min-width: 1366px)'
  // })
  // const isLargeHeight = useMediaQuery({
  //   query: '(min-height: 439px)'
  // })

  const [movie, setMovie] = useState(MovieData);
  const [searchType, setSearchType] = useState("title");
  const [searchTitle, setSearchTitle] = useState("");
  const [searchGenre, setSearchGenre] = useState([]);

  const searchTitleHandler = e => {
    const title = e.target.value;
    if(title === "") setMovie(MovieData);
    else {
      const hasTitle = [];
      for(let i = 0; i < MovieData.length; i++)
        if(MovieData[i].title.includes(title)) hasTitle.push(MovieData[i])
      setMovie(hasTitle);
    }
    
    setSearchTitle(title);
  }

  let allGenre = new Set([]);
  MovieData.map(data => {
    const genres = data.genre.split(',')
    genres.map(genre => {
      if(!(allGenre.has(genre.trim()))) allGenre.add(genre.trim())
    });
  });
  allGenre = Array.from(allGenre);

  const searchGenreHandler = e => {
    if (e.target.checked) {
      setSearchGenre([...searchGenre, e.target.value])
    } else if (!e.target.checked) {
      const temp = [];
      for(let i = 0; i < searchGenre.length; i++)
        if (searchGenre[i] !== e.target.value) temp.push(searchGenre[i]);
      setSearchGenre([...temp])
    }
  }
  const searchByGenre = () => {
    new Promise((res, rej) => res())
    .then(() => {
      const hasGenre = [];
      for(let i = 0; i < MovieData.length; i++) {
        const genres = MovieData[i].genre.split(',').map(genre => genre.trim());
        let flag = true;
        for(let j = 0; j < searchGenre.length; j++)
          if(!genres.includes(searchGenre[j])) {
            flag = false;
            break;
          }

        if (flag) hasGenre.push(MovieData[i]);
      }
      return hasGenre;
    })
    .then(hasGenre => setMovie(hasGenre));
  }

  return (
    <Container style={ContainerStyle}>
      <Row style={{marginBottom: "40px", marginTop: "20px"}}>
        <Col md={2}>
          <Form.Control
            as="select"
            value={searchType}
            onChange={e => setSearchType(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="genre">Genre</option>
          </Form.Control>
        </Col>
        <Col>
          {searchType==="title" ? <Form.Control value={searchTitle} onChange={e => searchTitleHandler(e)} /> : <></>}
          {searchType==="genre" ?
              <Form>
                <Row>
                    {allGenre.map((genre, index) => 
                      <Col key={index} md={2}>
                        <Form.Check label={genre} type="checkbox" onChange={e => searchGenreHandler(e)} style={{fontSize: "small"}} value={genre}/>
                      </Col>
                    )}

                </Row>  
              </Form>
            : <></>
          }
        </Col>
        {searchType==="genre" ? <Col md={2}><Button type="button" onClick={() => searchByGenre()} variant="dark">Search</Button></Col> : <></>}
      </Row>
      <Row>
        {movie.map((data, index) => 
        <Col md={3} key={index}>
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