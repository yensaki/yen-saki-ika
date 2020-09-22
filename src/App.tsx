import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RootIndex from './pages/index'
import WeaponsIndex from './pages/weapons/index'
import About from './pages/about'
import Navbar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={RootIndex} />
          <Route exact path="/about" component={About} />
          <Route exact path="/weapons" component={WeaponsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
