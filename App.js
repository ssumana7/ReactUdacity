import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';


// const numQuestions = 0;
// const numCorrect = 0;

class App extends Component {
   state = {
      numQuestions: 0,
      numCorrect:0
  }

 makeValues = () => {
   const value1 = Math.floor(Math.random() * 100)
   const value2 = Math.floor(Math.random() * 100)
   const value3 = Math.floor(Math.random() * 100)
   const answer = Math.floor(Math.random() * 3) + value1 + value2 + value3
   return [value1, value2, value3, answer] 
 }

  calculateSum = (val, value1, value2, value3, proposedAnswer) => {
    const sum = value1 + value2 + value3;
    this.setState({
       numQuestions: this.state.numQuestions + 1
     })
   if ((val === "true" && sum === proposedAnswer) || 
       (val === "false" && sum !== proposedAnswer)) 	{
     this.setState({
       numCorrect: this.state.numCorrect + 1
     })
   }
     
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game values={this.makeValues()} 
			  calculateSum = {this.calculateSum}
			  numCorrect={this.state.numCorrect}
              numQuestions={this.state.numQuestions} />
      </div>
    );
  }
}

export default App;
