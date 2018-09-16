import React from 'react'

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date()}
  }

  render() {
    return <div>
      <p>安可</p>
      <button>点击一下</button>
      <p>{this.state.count}</p>
    </div>
  }
}