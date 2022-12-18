import React from 'react'
import styled from 'styled-components'

// Using styled-components instead of css
// To install -> npm i styled-components

// Install extension "vscode-styled-components"

const Container = styled.div`
  height: 60px;
`

const Navbar = () => {
  return (
    <Container>
      Navbar
    </Container>
  )
}

export default Navbar