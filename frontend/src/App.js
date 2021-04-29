import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';



import Navigation from "./components/Navigation";
import SignIn from "./routes/SignIn";

import Movie from "./components/Movie";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Home = () => {
  return <div><Movie /><Movie /></div>
}

const App = () => {
  return (
      <Container>
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/signin" exact={true} component={SignIn} />
        </BrowserRouter>
      </Container>
  )
}

export default App;