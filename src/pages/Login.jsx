import styled from "styled-components";
import LoginAndRegisterImage from '../images/LoginAndRegister.png';
import {mobile} from "../responsive";

const LeftContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url(${(props) => props.img})
        right;
  background-size: cover;
  flex: 1.4;
  ${mobile({ display: "none" })}
`

const RightContainer = styled.div`
  width: 100vw;
    height: 100vh;
    background: white;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  /* margin: 5px 0px; */
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin: auto;
  margin-bottom: 10px;

`;

const Login = () => {
  return (
    <Container>
      <LeftContainer img={LoginAndRegisterImage}>

      </LeftContainer>

      <RightContainer>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        </Wrapper>
      </RightContainer>
      
    </Container>
  );
};

export default Login;