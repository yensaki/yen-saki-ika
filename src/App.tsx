import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import RootIndex from './pages/index'
import WeaponsIndex from './pages/weapons/index'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={RootIndex} />
        <Route exact path="/about" component={About} />
        <Route exact path="/weapons" component={WeaponsIndex} />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
