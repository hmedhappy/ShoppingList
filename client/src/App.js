import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <center> <h2>Hmed Todo</h2></center>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
