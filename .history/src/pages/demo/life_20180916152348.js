import React from 'react'

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleAdd() {

  }

  handleClick() {

  }
  render() {
    return <div>
      <p>安可</p>
      <button onClick={this.handleAdd}>点击一下</button>
      < button onClick = {this.handleClick.bind(this)} > 点击一下 < /button>
      <p>{this.state.count}</p>
    </div>
  }
}