import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      A1: 4,
      A2: 4,
      A3: 4,
      B1: 4,
      B2: 4,
      B3: 4,
      C1: 4,
      C2: 4,
      C3: 4,
      availCells: [
        'A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'
      ],
      winner: ''
    }
    this.updateCellState = this.updateCellState.bind(this)
    this.updateState = this.updateState.bind(this)
    this.winCheck = this.winCheck.bind(this)
  }
// cellStates will be labled 4, or 'player' 0 , or 'comp' 1 depending on who has played that cell
//availCells will help the comp know which cells it can play

  updateCellState(cell, user) {
    this.setState({
      [cell]: user,
      availCells: this.state.availCells.filter(item => item !== cell)
    })
  }
  //function to set the state of the cellStates and remove the cell from the array when used

  //when the component is updated, check how many turns have been run by the length of the remaining array. if it's less than 5 and a winner hasn't been declared, check for a winner.
  componentDidUpdate() {
    console.log(this.state.availCells.length)
    if ((this.state.availCells.length <= 4) && (this.state.winner === '')) {this.winCheck()
      } else return
  }

  winCheck() {
    console.log('winCheck running')
    if ((this.state.A1 + this.state.A2 + this.state.A3) === 0 || 3) {
      this.updateState(this.state.A1)
    } else if (this.state.B1 + this.state.B2 + this.state.B3) {
      this.updateState(this.state.B1)
    } else if (this.state.C1 + this.state.C2 + this.state.C3) {
      this.updateState(this.state.C1)
    } else if (this.state.A1 + this.state.B2 + this.state.C3) {
      this.updateState(this.state.A1)
    } else if (this.state.C1 + this.state.B2 + this.state.A3) {
      this.updateState(this.state.AC)
    } else if (this.state.A1 + this.state.B1 + this.state.C1) {
      this.updateState(this.state.A1)
    } else if (this.state.A2 + this.state.B2 + this.state.C2) {
      this.updateState(this.state.A2)
    } else if (this.state.A3 + this.state.B3 + this.state.C3) {
      this.updateState(this.state.A3)
    } else return
  }

  //once a winner has been declared, send their info up to App.js to be passed to the Banner.js
  updateState(winner){
    console.log([winner], ' state should be updated')
    this.props.winner(winner)
    this.setState({
      winner: winner
    })
  }

  //below i'm passing the cellState, the avaiLCell and the updtateCellState function as props
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