import React , { Component} from 'react';
import './App.css';

class Game extends Component {
  render() {
    return (
    	<div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.props.values[0]} + ${this.props.values[1]} + ${this.props.values[2]} = 			         				${this.props.values[3]}`}
			</p>
          </div>
          <button value="true" onClick={(e)=> this.props.calculateSum(e.target.value, 		                	                     this.props.values[0],this.props.values[1],this.props.values[2],this.props.values[3])}>True</button>
          <button value="false" onClick={(e)=> this.props.calculateSum(e.target.value, 		                	                     this.props.values[0],this.props.values[1],this.props.values[2],this.props.values[3])}>False</button>
          <p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
          </p>
        </div>
    );
  }
}

export default Game;