import React from 'react'

export default class Life extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    componentWillMount() {
      console.log('will mount');
    }

    componentDidMount() {
      console.log('did mount');
    }

    componentWillReceiveProps(newProps) {
       console.log('will props' + newProps.name);
    }

    shouldComponentUpdate() {
      console.log('shold update');
      return true;
    }

    render() {
      return  <div>
        <p>{this.props.name}</p>
      </div>
    }
  }