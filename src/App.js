import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListShop from './components/ListShop'
import Nav from './components/Nav'
import Shop from './components/Shop'

const App = () => {
  return (
    <Container>
      <Nav/>
      <Router>
        <Switch>
          <Route exact path='/' component={ListShop}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </Router>
      
    </Container>
  )
}

export default App
const Container = styled.div`
  width: 100%;
  height: 100%;
`

