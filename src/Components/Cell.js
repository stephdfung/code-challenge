import React, { Component } from 'react';
import PlayerCell from './PlayerCell'
import CompCell from './CompCell'

class Cell extends Component {
  constructor(props) {
    super(props);

    this.renderCell = this.renderCell.bind(this)
    this.playMove = this.playMove.bind(this)
    // this.compMove = this.compMove.bind(this)
  }

//user selects a cell and we check to see if the cell has been played yet. if not, update the state, rerender the component, and pop the cell from the array and update the players turn to comp
  playMove() {
    console.log('playMove() running')
    if (this.props.cellState !== 4) {
      return
    } else {
      this.props.updateCellState(this.props.id, 0)
      // this.setState({
      //   turn: 'comp'
      // })
      console.log('inside playMove')
      //calling the function in the parent to update the cellState to player, and then to remove the cell from the availCells array
      // this.compMove();
    }
  }

  // componentDidUpdate() {
  //   console.log('celljs component did update')
  //   this.compMove()
  // }


  // compMove() {
  //   console.log('comp')
  //   let arr = this.props.availCells
  //   let compCell = arr[Math.floor(Math.random() * arr.length)]

  //   if (this.state.turn === 'comp') {
  //     this.props.updateCellState(compCell, 1)
  //     this.setState({
  //       turn: 'player'
  //     })} else {return}
      
  // }

  //conditional rendering of the cell
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