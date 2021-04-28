import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";

const Home = () => {
  return <p>HOME</p>
}

const Features = () => {
  return <p>Features</p>
}

const Pricing = () => {
  return <p>Pricing</p>
}

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/features" exact={true} component={Features} />
      <Route path="/pricing" exact={true} component={Pricing} />
    </BrowserRouter>
  )
}

export default App;