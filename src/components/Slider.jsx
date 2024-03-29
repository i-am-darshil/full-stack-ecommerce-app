import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from "../data";
import { mobile } from "../responsive";
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
  ${mobile({ display: "none" })}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cfcbcb;
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
  opacity: 0.75;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* transform: translateX(-100vw); This makes the 3rd slide visible */
  /* transform: translateX(-200vw); */ /* This makes the 3rd slide visible*/
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
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

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length-1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          sliderItems.map((item) => {
              return (
              <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img}/>
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
            )
          })
        }
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider