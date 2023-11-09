import React from 'react'
import './app.css'
import Navigation from './components/common/Navigation';
import Hero from './components/common/Hero'
// import Line from './components/common/Line'
import Line from './components/common/Line';
// import Card from './components/common/Card';
import Project from './components/projects/Project';
import About from './components/about/About';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
        <Home/>
        <Line/>
        <Project/>
        <Line/>
        <About/>
        <Line/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App