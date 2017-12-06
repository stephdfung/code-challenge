import React, { Component } from 'react';

class Banner extends Component {
  constructor(){
    super();
    this.renderBanner = this.renderBanner.bind(this)
    this.reloadPage = this.reloadPage.bind(this)
  }

  reloadPage() {
    window.location.reload()
  }

  renderBanner() {
    if (this.props.message === false) {
      return (
        <div className="banner">
          <h2>TIC TAC TOE</h2>
          <p>Get three in a row to win. Click a space on the board to start.</p>
        </div>
      )} else if (this.props.message === 'The Computer' || this.props.message === 'You') {
        return (
          <div className="banner">
            <h3>{this.props.message} won!</h3>
            <p onClick={this.reloadPage}>Click here to reset the board.</p>
          </div>
      )} else if (this.props.message === 'draw') {
        return (
          <div className="banner">
            <h3>It's a draw!</h3>
            <p onClick={this.reloadPage}>Click here to reset the board.</p>
          </div>
        )
      }
  }


  render() {
    return this.renderBanner()
  }
}

export default Banner;
