import React, {useState} from 'react'
import Home from './components/home/home'
import About from './components/about'
import Contact from './components/contact'
import Testimonies from './components/testimonies'
import Portfolio from './components/portfolio'
import NavigationBar from './components/navigationBar'
import {Switch, Route} from 'react-router-dom'

// generally copy of https://www.denisgostev.com/wedding-porfolio
// TODO: Create markup for pages, style it a bit so it looks OK.
// TODO: Get some stock images to put in the image carouselle.
// TODO: tests (unit with jest and functional with react-test-renderer)

const App = () => {
  const [language, setLanguage] = useState('en')
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path='/' exact>
          <Home language={language} />
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
}

export default App
