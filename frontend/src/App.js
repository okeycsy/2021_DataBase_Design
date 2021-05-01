import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';



import Navigation from "./components/Navigation";
import SignIn from "./routes/SignIn";
import Movie from "./routes/Movie"
import MovieCreate from "./routes/MovieCreate";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const App = () => {
  return (
      <Container>
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact={true} component={Movie} />
            <Route path="/signin" exact={true} component={SignIn} />
            <Route path="/moviecreate" exact={true} component={MovieCreate} />
        </BrowserRouter>
      </Container>
  )
}

export default App;