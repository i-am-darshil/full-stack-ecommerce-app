import React from 'react'
import styled from 'styled-components'

// Using styled-components instead of css
// To install -> npm i styled-components

// Install extension "vscode-styled-components"

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1; // Allocate equal space to all three divs -> left, center, right
`

const Center = styled.div`
  flex: 1; // Allocate equal space to all three divs -> left, center, right
`

const Right = styled.div`
  flex: 1; // Allocate equal space to all three divs -> left, center, right
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dicta ducimus commodi quod dignissimos obcaecati dolore ipsum minima asperiores exercitationem molestiae corporis ex, omnis fugiat aspernatur fuga distinctio, sint nemo!</Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar