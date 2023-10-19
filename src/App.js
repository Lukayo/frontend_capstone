import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from "./components/Hero";
import Highlights from './components/Highlights';
import Rating from './components/Rating';
import About from './components/About';

function App() {
  return (
    <>
          <Nav/>
          <Hero/>
          <article><Highlights/></article>
          <article><Rating/></article>
          <article><About/></article>
        <footer>
          <Footer/>
        </footer>
    </>
  );
}

export default App;
