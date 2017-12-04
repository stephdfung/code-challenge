import React, { Component } from 'react';
import PlayerCell from './PlayerCell'
import CompCell from './CompCell'

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }

    this.renderCell = this.renderCell.bind(this)
    this.playMove = this.playMove.bind(this)
    this.compMove = this.compMove.bind(this)
  }

  //this is where i am having trouble targeting the cellStates object that i passed as a prop. I only need to read the current state and based on that info, i can do something after.
  playMove() {
    if (this.props.cellState !== '') {
      console.log('returning from the if statement bc this cell has been used', this.props.cellState)
      return
    } else {
      console.log('cell not used, we are updating the cell state')
      let user = 'player'
      this.props.updateCellState(this.props.id, 'player')
      //calling the function in the parent to update the cellState to player, and then to remove the cell from the availCells array
      this.setState({
        counter: this.state.counter+= 1
      })
      //counter will keep track of the turn
    }
  }

  componentDidUpdate() {
    if (this.state.counter % 2 === 1) {
      return
    } else if (this.state.counter % 2 === 0) {
      this.compMove()
    }
    //if the user has just went, the computer will run it's turn
    //state updates way too slowly for this to actually work!!!
  }

  compMove() {
    let arr = this.props.availCells
    let compCell = arr[Math.floor(Math.random() * arr.length)]
    console.log(compCell)

    this.props.updateCellState(compCell, 'comp')
    this.setState({
      counter: this.state.counter+= 1
    })
  }

  //in this function i need to do the same thing. i want to read the current cellState and render based on that info.
  renderCell() {
    if (this.props.cellState === 'player') {
      return (
        <PlayerCell />
      )
    } else if (this.props.cellState === 'comp') {
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