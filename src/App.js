import React, { Component } from 'react';
import './App.css';
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
