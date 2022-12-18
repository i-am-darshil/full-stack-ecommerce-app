import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

// Using styled-components instead of css
// To install -> npm i styled-components

// Install extension "vscode-styled-components"

// Add icons using material-ui -> https://mui.com/material-ui/material-icons/
// Install material-ui core and icons -> npm i @material-ui/core @material-ui/icons

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1; // Allocate equal space to all three divs -> left, center, right
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1; // Allocate equal space to all three divs -> left, center, right
  text-align: center;
`

const Logo = styled.div`
  font-weight: bold;
`

const Right = styled.div`
  flex: 1; // Allocate equal space to all three divs -> left, center, right
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar