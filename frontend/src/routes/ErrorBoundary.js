import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from "styled-components";

import ErrorIcon from "../components/icon/ErrorIcon";

const tremble = keyframes`
  0% {left:0px; top:0px;}
  33% {left:-20px; top:0px;}
  66% {left:20px; top:0px;} 
  100% {left:0px; top:0px;}
`;

const TrembleDiv = styled.div`
  position: relative;
  animation-name: ${tremble};
  animation-duration: 0.1s;
  animation-direction: alternate;
  animation-iteration-count: 3;

`;
// animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state> [,...];
const SubContainer = styled.div`
  text-align: center;
  margin-top: 20%;
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error: error
    })
  }

  render() {
    if (this.state.error) {
      // Error path
      return (
        <Container>
          <SubContainer>
            <TrembleDiv>
              <ErrorIcon 
                size={256 > window.innerWidth/3 ? window.innerWidth/3 : 256 }
              />
            </TrembleDiv>
            <div>
              <p style={{fontSize:"xx-large"}}>An Error Occurred :(</p>
            </div>
          </SubContainer>
        </Container>
      );
    }

    // Normally, just render children
    return this.props.children;
  }  
}

export default ErrorBoundary;