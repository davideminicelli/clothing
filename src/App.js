import React from 'react';
import './styles/App.scss';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Intro />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
