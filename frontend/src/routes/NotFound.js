import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from "styled-components";

import NotFoundIcon from "../components/icon/NotFoundIcon";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const SubContainer = styled.div`
  text-align: center;
  margin-top: 20%;
`

const BlinkDiv = styled.div`
  animation: ${blink} 3s infinite linear alternate;
`;

const NotFound = () => {
  return (
    <Container style={{textAlign: "center", verticalAlign: "middle"}}>
      <SubContainer>
        <BlinkDiv>
          <NotFoundIcon
            size={266 > window.innerWidth/3 ? window.innerWidth/3 : 266 }
          />
        </BlinkDiv>
        <div>
          <p style={{fontSize:"xx-large"}}>Page Not Found :(</p>
        </div>
      </SubContainer>
    </Container>
  )
}

export default NotFound;