import SignInForm from "../components/SignInForm";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignIn = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  )
}

export default SignIn;