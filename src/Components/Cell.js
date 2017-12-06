import React, { Component } from 'react';
import PlayerCell from './PlayerCell'
import CompCell from './CompCell'

class Cell extends Component {
  constructor(props) {
    super(props);

    this.renderCell = this.renderCell.bind(this)
    this.playMove = this.playMove.bind(this)
  }

//The player selects a cell and we check to see if the cell has been played yet.
//If not we update the state of the cell to the player, which causes the cell to be rerendered with an X
// and pop the cell from the array and update the turn to computer in the parent component
  playMove() {
    if (typeof this.props.cellState !== 'string') {
      return
    } else {
      this.props.updateCellState(this.props.id, 0)
    }
  }

  //Conditional rendering of the cell based on the cell's state
  renderCell() {
    if (this.props.cellState === 0) {
      return (
        <PlayerCell />
      )
    } else if (this.props.cellState === 1) {
      return (
        <CompCell />
      )
    } else { 
      return (
        <div className="box" onClick={this.playMove}>
        </div>
      )
    }
  }

  render() {
    return this.renderCell()
  }
}

export default Cell;