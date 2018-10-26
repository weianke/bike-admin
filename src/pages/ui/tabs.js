import React from 'react'
import {Card, Tabs, message} from 'antd'
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {

    callback = (key) => {
        message.info('Hi.您选择了页签：'+key);
    }
    render(){
      return(
         <div>
            <Card title="Tab页签" className="card-wrap">
              <Tabs defaultActiveKey="1"  onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">欢迎学习React课程</TabPane>
                <TabPane tab="Tab 2" key="2">欢迎学习React课程2</TabPane>
                <TabPane tab="Tab 3" key="3">欢迎学习React课程3</TabPane>
              </Tabs>
            </Card>
         </div>
      );
    }
}