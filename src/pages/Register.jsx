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
  width: 100%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: auto;
`;

const Register = () => {
  return (
    <Container>
      <LeftContainer img={LoginAndRegisterImage}>

      </LeftContainer>

      <RightContainer>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </RightContainer>
      
    </Container>
  );
};

export default Register;