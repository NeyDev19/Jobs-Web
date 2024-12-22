import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Homecards from './components/Homecards'
import Joblistings from './components/Joblistings'
import ViewAll from './components/ViewAll'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
      <Homecards />
      <Joblistings />
      <ViewAll/>
      

      </>
  )
}

export default App