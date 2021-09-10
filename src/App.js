import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import ListShop from './components/ListShop'
import Nav from './components/Nav'
import Shop from './components/Shop'
import Cart from './components/Cart.jsx'

const App = () => {
  return (
    <Container>
      <Nav />
    
        <Switch>
          <Route exact path='/'>
            <ListShop />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      

    </Container>
  )
}

export default App
const Container = styled.div`
  width: 100%;
  height: 100%;
`

