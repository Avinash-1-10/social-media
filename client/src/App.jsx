import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Features from './components/Features'
import StatCard from './components/StatCard'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Products/>
      <Features/>
      <StatCard/>
      <Footer/>
    </div>
  )
}

export default App