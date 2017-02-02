import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }

    this.whenClicked = this.whenClicked.bind(this)

  }

  whenClicked() {
    this.setState({
      timesClicked: this.state.timesClicked+=1
    });
  }

  render () {
    return (
        <button onClick={this.whenClicked}>{this.state.timesClicked}</button>
    )
  }
}


module.exports = DigitalClicker
