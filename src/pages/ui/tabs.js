import React from 'react'
import {Card, Tabs, message, Icon} from 'antd'
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {

    callback = (key) => {
        message.info('Hi.您选择了页签：'+key);
    }

    componentWillMount(){
        const panes = [
          {
            title: 'Tab 1',
            content: 'Tab 1',
            key: '1'
          },
          {
             title: 'Tab 2',
             content: 'Tab 2',
             key: '2'
           }, 
           {
             title: 'Tab 3',
             content: 'Tab 3',
             key: '3'
           }
        ]
        this.setState({
          panes
        })
    }

    render(){
      return(
         <div>
            <Card title="Tab页签" className="card-wrap">
              <Tabs defaultActiveKey="1"  onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">欢迎学习React课程</TabPane>
                <TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程2</TabPane>
                <TabPane tab="Tab 3" key="3">欢迎学习React课程3</TabPane>
              </Tabs>
            </Card>
             <Card title="Tab带图的页签" className="card-wrap">
              <Tabs defaultActiveKey="1"  onChange={this.callback}>
                <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">欢迎学习React课程</TabPane>
                <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">欢迎学习React课程2</TabPane>
                <TabPane tab={<span><Icon type="delete"/>Tab 2</span>} key="3">欢迎学习React课程3</TabPane>
              </Tabs>
            </Card>
             <Card title="Tab动态页签" className="card-wrap">
              <Tabs defaultActiveKey="1"  onChange={this.callback}>
                {
                  this.state.panes.map(panel => 
                     <TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>
                  )
                }
              </Tabs>
            </Card>
         </div>
      );
    }
}