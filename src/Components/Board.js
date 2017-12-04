import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      A1: '',
      A2: '',
      A3: '',
      B1: '',
      B2: '',
      B3: '',
      C1: '',
      C2: '',
      C3: '',
      availCells: [
        'A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'
      ]
    }
    this.updateCellState = this.updateCellState.bind(this)
  }
// cellStates will be labled '', or 'player', or 'comp' depending on who has played that cell
//availCells will help the comp know which cells it can move into

  updateCellState(cell, user) {
    this.setState({
      [cell]: user,
      availCells: this.state.availCells.filter(item => item !== cell)
    })
  }
  //function to set the state of the cellStates and remove the cell from the array when used

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