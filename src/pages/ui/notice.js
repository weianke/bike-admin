import React from 'react'
import {Card , Button, notification} from 'antd'
import './ui.less'

export default class Notice extends React.Component{

    openNotification = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            })
        }
        notification[type]({
           message: '发工资了',
           description: '上个月考勤22天，迟到10天，实发工资300块！'
        })
    }

    render(){
      return(
          <div>
            <Card title="通知提醒框" className="card-wrap">
                <Button type="primary" onClick={() => this.openNotification('success')}>Success</Button>
                <Button type="primary" onClick={() => this.openNotification('info')}>Info</Button>
                <Button type="primary" onClick={() => this.openNotification('warning')}>Waining</Button>
                <Button type="primary" onClick={() => this.openNotification('error')}>Error</Button>                
            </Card>
             <Card title="通知提醒框方向" className="card-wrap">
                <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>Success</Button>
                <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>Info</Button>
                <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>Waining</Button>
                <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>Error</Button>                
            </Card>
          </div>
      );
    }
}