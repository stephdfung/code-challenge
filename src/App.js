import React, { Component } from 'react';
import './App.css';

import Board from './Components/Board';
import Banner from './Components/Banner';

class App extends Component {
  constructor(){
    super();
    this.state = {
      winner: false,
    }
    this.winner = this.winner.bind(this)
  }

  winner(winner) {
    if (winner === 0) {
      this.setState({
        winner: 'You'
      })
    } else if (winner === 1) {
      this.setState({
        winner: 'The Computer'
      })
    } else if (winner === 'draw') {
      this.setState({
        winner: 'draw'
      })
    }
   
  }

  render() {
    return (
      <div>
        <Banner message={this.state.winner}/>
        <Board winner={this.winner} />
      </div>
    )
  }
}

export default App;
