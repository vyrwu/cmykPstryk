import React from 'react'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Testimonies from './components/testimonies'
import Portfolio from './components/portfolio'
import NavigationBar from './components/navigationBar'
import {Switch, Route} from 'react-router-dom'
import './App.css'

// generally copy of https://www.denisgostev.com/wedding-porfolio

const App = () => (
  <>
    <NavigationBar />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/testimonies' exact>
        <Testimonies />
      </Route>
      <Route path='/portfolio' exact>
        <Portfolio />
      </Route>
      <Route path='/contact' exact>
        <Contact />
      </Route>
    </Switch>
  </>
)

export default App
