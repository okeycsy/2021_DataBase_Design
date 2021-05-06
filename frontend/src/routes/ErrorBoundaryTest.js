import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
`

const ErrorBoundaryTest = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count >= 3) {
      throw new Error("I CRASHED!");
    }
  }, [count])

  return (
    <Container>
      <p>It occur error when count reached 3</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>ADD ONE</button>
    </Container>
    
  )
};

export default ErrorBoundaryTest;