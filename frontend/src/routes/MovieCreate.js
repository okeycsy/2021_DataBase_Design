import { useState } from "react";
import { Container, Row, Col, Form, Figure } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const Button = styled.button`

`

const MovieCreate = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");
  const [story, setStory] = useState("");
  const [date, setDate] = useState([]);
  const [nation, setNation] = useState([]);
  const [genre, setGenre] = useState([]);
  const [director, setDirector] = useState([]);
  const [actor, setActor] = useState([]);

  const [numDate, setNumDate] = useState(1);
  const [numDirector, setNumDirector] = useState(1);
  const [numActor, setNumActor] = useState(1);
  const [numNation, setNumNation] = useState(1);
  const subHandler = (value, hook) => {
    if(value > 1) hook(value - 1);
  }

  const [preview, setPreview] = useState("");
  const posterHandler = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    setPreview(imageUrl);
    setPoster(imageFile);
  }

  const allGenres = ["액션", "멜로", "드라마", "코메디", "무협", "SF", "에로"];

  

  return (
    <Form>
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={e => setTitle(e.target.value)}/>

      <Form.Label>Time</Form.Label>
      <Form.Control onChange={e => setTime(e.target.value)}/>

      <Form.Label>Rate</Form.Label>
      <Form.Control as="select" onChange={e => setRate(e.target.value)}>
        <option>ALL</option>
        <option>12</option>
        <option>15</option>
        <option>18</option>
      </Form.Control>

      <Form.Label>Poster</Form.Label>
      <Figure.Image src={preview}/>
      <Form.File onChange={posterHandler} accept="image/*"/>

      <Form.Label>Story</Form.Label>
      <Form.Control as="textarea" rows={5} onChange={e => setStory(e.target.value)}/>

      <Form.Label>Genre</Form.Label>
      {allGenres.map((genre, index) => <Form.Check key={index} label={genre} type="checkbox" id={`FormGenre${index}`}/>)}

      <Button type="button" onClick={() => setNumDate(numDate+1)}>+</Button>
      <Button type="button" onClick={() => subHandler(numDate, setNumDate)}>-</Button>
      <Form.Label>Date</Form.Label>
      {[...Array(numDate)].map((n, index) => 
        <Form.Control key={index} type="date" id={`FormDate${index}`}/>)}
      
      <Button type="button" onClick={() => setNumDirector(numDirector+1)}>+</Button>
      <Button type="button" onClick={() => subHandler(numDirector, setNumDirector)}>-</Button>
      <Form.Label>Director</Form.Label>
      {[...Array(numDirector)].map((n, index) => 
        <Form.Control key={index} id={`FormDirector${index}`} placeholder="Director"/>)}

      <Button type="button" onClick={() => setNumActor(numActor+1)}>+</Button>
      <Button type="button" onClick={() => subHandler(numActor, setNumActor)}>-</Button>
      <Form.Label>Actor</Form.Label>
      {[...Array(numActor)].map((n, index) => 
        <Form.Control key={index} id={`FormActor${index}`} placeholder="Actor"/>)}
       
      <Button type="button" onClick={() => setNumNation(numNation+1)}>+</Button>
      <Button type="button" onClick={() => subHandler(numNation, setNumNation)}>-</Button>
      <Form.Label>Nation</Form.Label>
      {[...Array(numNation)].map((n, index) => 
        <Form.Control key={index} id={`FormNation${index}`} placeholder="Nation"/>)}
    </Form>
  );
}

export default MovieCreate;