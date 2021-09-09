import React from 'react'
import styled from 'styled-components'
import ListShop from './components/ListShop'
import Nav from './components/Nav'

const App = () => {
  return (
    <Container>
      <Nav/>
      <ListShop/>
    </Container>
  )
}

export default App
const Container = styled.div`
  width: 100%;
  height: 100%;
`

