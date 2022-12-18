import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import image1 from '../images/image_1.png';

// Use images from unsplash.com
// Remove Background from the images using https://pixlr.com/remove-background/
// Save the background-removed images into images folder
// Import the images and use them

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* top: 0;
  bottom: 0;
  margin: auto; */
  top: 50%;
  /* Passing props to styled-components */
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
  flex:1;
  height: 100%;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex:1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 60px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src={image1}/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src={image1}/>
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src={image1}/>
          </ImgContainer>
          <InfoContainer>
            <Title>PARTY SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider