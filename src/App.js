import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './Components/Nav/Nav'
import Cards from './Components/Cards/Cards'
import Analytics from './Components/Analytics/Analytics'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
<div className="component-app">
      <Nav />
     {/* <Cards />
     <Analytics /> */}
     <Footer />
      </div>


    );

  }
}

export default App;
