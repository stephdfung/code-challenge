import React, { Component } from 'react';

class Banner extends Component {
  constructor(){
    super();
    this.renderBanner = this.renderBanner.bind(this)
  }

  renderBanner() {
    if (this.props.message === false) {
      return (
        <div>
          <h2>Tic Tac Toe</h2>
          <p>Three in a row win! Click to play!</p>
        </div>
      )} else if (this.props.message) {
        return (
          <div>
            <h2 onClick={window.location.reload}>{this.props.message} won! Click here to play again!</h2>
          </div>
      )} else if (this.props.message === 'draw') {
        return (
          <div>
            <h2 onClick={window.location.reload}>It's a draw! Click to play again!</h2>
          </div>
        )
      }
  }


  render() {
    return this.renderBanner()
  }
}

export default Banner;
