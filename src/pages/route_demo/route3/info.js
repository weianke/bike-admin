import React from 'react'

export default class Info extends React.Component {

    render(){
      return (
                <div>
                   这里是设置动态路由功能
                  动态路由的值：{this.props.match.params.value}
                </div>
      );
    }
}