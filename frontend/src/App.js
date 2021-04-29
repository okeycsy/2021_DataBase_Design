import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';



import Navigation from "./components/Navigation";

import SignInForm from "./components/SignInForm";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Home = () => {
  return <SignInForm />
}

const Features = () => {
  return <p>Features</p>
}

const Pricing = () => {
  return <p>Pricing</p>
}



const App = () => {
  return (

      <Container>
        <BrowserRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/features" exact={true} component={Features} />
            <Route path="/pricing" exact={true} component={Pricing} />
        </BrowserRouter>
      </Container>

  )
}

export default App;