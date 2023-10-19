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
      <body>       
        <header>
          <Nav/>
        </header>     
        <main>
          <article><Hero/></article>
          <article><Highlights/></article>
          <article><Rating/></article>
          <article><About/></article>
        </main>
        <footer>
          <Footer/>
        </footer>   
      </body>
    </>
  );
}

export default App;
