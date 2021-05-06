import { useState } from "react";
import { Container, Row, Col, Form, Figure, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const RowBlockStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  border: "1px solid #B0B0B0",
  borderRadius: "5px"
}

const ButtonBox = styled.div`
  float:right;
`
const FormButton = styled.button`

`

const NoPreview = styled.div`
  display: table-cell;
  height: 214px;
  width: 150px;
  text-align: center;
  vertical-align: middle;
  alt: poster;
  background-color: #D0D0D0;
`

const AdminMovie = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    time: 0,
    rate: "ALL",
    poster: "",
    story: "",
    date: [],
    nation: [], 
    genre: [], 
    director: [], 
    actor: []
  });

  const [numDate, setNumDate] = useState(1);
  const [numDirector, setNumDirector] = useState(1);
  const [numActor, setNumActor] = useState(1);
  const [numNation, setNumNation] = useState(1);
  const subHandler = (value, hook) => {
    if(value > 1) hook(value - 1);
  }

  const [preview, setPreview] = useState("");
  const posterHandler = (e) => {
    try {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
  
      setPreview(imageUrl);
      setMovie({...movie, poster:imageFile})
    } catch(error) {

    }
  }

  const allGenres = ["액션", "멜로", "드라마", "코메디", "무협", "SF", "에로"];

  return (
    <Container>

      <Form>

        <Row style={RowBlockStyle}>
          <Col md={7}>
            <Row style={{height: "50%", padding:"0 16px 0 16px"}}>
              <Form.Label>Title</Form.Label>
              <Form.Control onChange={e => setMovie({...movie, title:e.target.value})} value={movie.title}/>
            </Row>
            <Row style={{height: "50%"}}>
              <Col>
                <Form.Label>Time</Form.Label>
                <Form.Control onChange={e => setMovie({...movie, time:e.target.value})} value={movie.time}/>
              </Col>
              <Col>
                <Form.Label>Rate</Form.Label>
                <Form.Control as="select" onChange={e => setMovie({...movie, rate:e.target.value})} value={movie.rate}>
                  <option>ALL</option>
                  <option>12</option>
                  <option>15</option>
                  <option>18</option>
                </Form.Control>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Form.Label>Poster</Form.Label>
            {preview ? 
              <Figure.Image
                src={preview} 
                height={214}
                width={150}
                alt="poster"
                style={{display: "table-cell"}}
              /> : 
              <NoPreview>no image</NoPreview>
            }
            <Form.File onChange={posterHandler} accept="image/*" style={{width:"50%"}}/>
          </Col>
        </Row>

        <Row style={RowBlockStyle}>
          <Col>
            <Form.Label>Genre</Form.Label>
            <Row>
              {allGenres.map((genre, index) => <Col key={index}><Form.Check label={genre} type="checkbox" id={`FormGenre${index}`}/></Col>)}
            </Row>
          </Col>
        </Row>
        
        <Row style={RowBlockStyle}>
          <Col>
            <Form.Label>Story</Form.Label>
            <Form.Control as="textarea" rows={5} onChange={e => setMovie({...movie, story:e.target.value})} value={movie.story}/>
          </Col>
        </Row>

        
        <Row style={RowBlockStyle}>
          <Col>
            <Form.Label>Date</Form.Label>
            <ButtonBox>
              <FormButton type="button" onClick={() => setNumDate(numDate+1)}>+</FormButton>
              <FormButton type="button" onClick={() => subHandler(numDate, setNumDate)}>-</FormButton>
            </ButtonBox>
            {[...Array(numDate)].map((n, index) => 
              <Form.Control key={index} type="date" id={`FormDate${index}`}/>)}
          </Col>
        </Row>

        <Row style={RowBlockStyle}>
          <Col>
            <Form.Label>Director</Form.Label>
            <ButtonBox>
              <FormButton type="button" onClick={() => setNumDirector(numDirector+1)}>+</FormButton>
              <FormButton type="button" onClick={() => subHandler(numDirector, setNumDirector)}>-</FormButton>
            </ButtonBox>
            {[...Array(numDirector)].map((n, index) => 
              <Form.Control key={index} id={`FormDirector${index}`} placeholder="Director"/>)}
          </Col>
        </Row>

        <Row style={RowBlockStyle}>
          <Col>
            <Form.Label>Actor</Form.Label>
            <ButtonBox>
              <FormButton type="button" onClick={() => setNumActor(numActor+1)}>+</FormButton>
              <FormButton type="button" onClick={() => subHandler(numActor, setNumActor)}>-</FormButton>
            </ButtonBox>
            {[...Array(numActor)].map((n, index) => 
              <Form.Control key={index} id={`FormActor${index}`} placeholder="Actor"/>)}
          </Col>
        </Row>

        <Row style={RowBlockStyle}>
          <Col>
            <Form.Label>Nation</Form.Label>
            <ButtonBox>
              <FormButton type="button" onClick={() => setNumNation(numNation+1)}>+</FormButton>
              <FormButton type="button" onClick={() => subHandler(numNation, setNumNation)}>-</FormButton>
            </ButtonBox>
            {[...Array(numNation)].map((n, index) => 
              <Form.Control key={index} id={`FormNation${index}`} placeholder="Nation"/>)}
          </Col>
        </Row>

        <Row style={{textAlign:"center"}}>
          <Col>
            <ButtonBox>
              <Button variant="dark" type="button" style={{marginRight: "10px"}}>Submit</Button>
              <Button variant="light" type="button" onClick={() => props.history.goBack(1)}>Cancle</Button>
            </ButtonBox>
          </Col>
        </Row>

      </Form>
    </Container>
  );
}

export default AdminMovie;