import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      A1: '1',
      A2: '2',
      A3: '3',
      B1: '4',
      B2: '5',
      B3: '6',
      C1: '7',
      C2: '8',
      C3: '9',
      availCells: [
        'A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'
      ],
      winner: '',
      nextMove: false,
    }
    this.updateCellState = this.updateCellState.bind(this)
    this.updateState = this.updateState.bind(this)
    this.winCheck = this.winCheck.bind(this)
    this.checkForWin = this.checkForWin.bind(this)
    this.nextTurn = this.nextTurn.bind(this)
    this.compMove = this.compMove.bind(this)
  }
// We have a few states here
// Individual cell states that will be updated to either player or comp
// An array containing all the available cells that have not yet been played
// And a move tracker to determine who's move it is. It assists with the winCheck function
// and it assists with the computer's turn logic

  updateCellState(cell, user) {
    this.setState({
      [cell]: user,
      availCells: this.state.availCells.filter(item => item !== cell),
      nextMove: !this.state.nextMove
    }, () => {
        this.checkForWin();
    })
  }
// After the player has chosen a cell, this function is called as prop from the child and feeds
// in the cell ID, removes the cell from the array in state, and changes the nextMove state so
// so the computer can have their turn, and the checkForWin function is a callback here

  updateCompState(cell, user) {
    this.setState({
      [cell]: user,
      availCells: this.state.availCells.filter(item => item !== cell)
    }, () => {
      this.checkForWin();
    })
  }

  compMove() {
    let arr = this.state.availCells
    let compCell = arr[Math.floor(Math.random() * arr.length)]

    this.updateCompState(compCell, 1)   
  }

// A helper function for the computer to move. Only if the nextMove state is true will the computer be able to go.
  nextTurn() {
    if (this.state.nextMove === true) {
      this.setState({
        nextMove: !this.state.nextMove
      }, () => {
        this.compMove();
      })
    }
  }

  //Check how many turns have been run by the length of the remaining array. Ff it's less than 4 and a winner hasn't been declared, check for a winner. If not, move on to the next turn.
  checkForWin() {
    if ((this.state.availCells.length <= 4) && (this.state.winner === '')) {
      this.winCheck()
    } else {
      this.nextTurn()
    }
  }

  // Checking for all the possible win solutions, and also accounts for potential draws.
  winCheck() {
    if (this.state.A1 === this.state.A2 && this.state.A2 === this.state.A3) {
      this.updateState(this.state.A2)
    } else if (this.state.B1 === this.state.B2 && this.state.B3 === this.state.B2) {
      this.updateState(this.state.B2)
    } else if (this.state.C1 === this.state.C2 && this.state.C3 === this.state.C2) {
      this.updateState(this.state.C2)
    } else if (this.state.A1 === this.state.B2 && this.state.C3 === this.state.B2) {
      this.updateState(this.state.B2)
    } else if (this.state.C1 === this.state.B2 && this.state.A3 === this.state.B2) {
      this.updateState(this.state.B2)
    } else if (this.state.A1 === this.state.B1 && this.state.C1 === this.state.B1) {
      this.updateState(this.state.B1)
    } else if (this.state.A2 === this.state.B2 && this.state.C2 === this.state.B2) {
      this.updateState(this.state.B2)
    } else if (this.state.A3 === this.state.B3 && this.state.C3 === this.state.B3) {
      this.updateState(this.state.B3)
    } else if ((this.state.availCells.length <= 1) && (this.state.winner === '')) {
      this.updateState('draw')
    } else {this.nextTurn()}
  }

  //Once a winner has been declared, send their info up to App.js to be passed to the Banner.js
  updateState(winner){
      this.props.winner(winner)
      this.setState({
        winner: winner
      })
  }

  //Below I'm passing the cellState, the avaiLCell and the updtateCellState function as props
  render() {
    return (
      <div className="gameBoard">
        <Cell id={'A1'} cellState={this.state.A1} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        <Cell id={'A2'} cellState={this.state.A2} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        <Cell id={'A3'} cellState={this.state.A3} availCells={this.state.availCells} updateCellState={this.updateCellState}/>

        <Cell id={'B1'} cellState={this.state.B1} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        <Cell id={'B2'} cellState={this.state.B2} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        <Cell id={'B3'} cellState={this.state.B3} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        
        <Cell id={'C1'} cellState={this.state.C1} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        <Cell id={'C2'} cellState={this.state.C2} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
        <Cell id={'C3'} cellState={this.state.C3} availCells={this.state.availCells} updateCellState={this.updateCellState}/>
      </div>
    )
  }


}

export default Board;