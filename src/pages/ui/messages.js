import React from 'react'
import {Card, Button, message} from 'antd'
import './ui.less'

export default class Messages extends React.Component{
  
    showMessage = () => {
       message.success('恭喜你，弹出成功');
    }
    
    render(){
       return(
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button  type="primary" onClick={this.showMessage}>Success</Button>
                    <Button  type="primary" onClick={this.showMessage}>Info</Button>
                    <Button  type="primary" onClick={this.showMessage}>Error</Button>
                    <Button  type="primary" onClick={this.showMessage}>Wraning</Button>
                    <Button  type="primary" onClick={this.showMessage}>Loading</Button>                    
                </Card>
            </div>
       );
    }
}