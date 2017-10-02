import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';


import logo from "../assets/logo.svg";
import "../styles/index.css";


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
      </div>
    );
  }
}

export default App;