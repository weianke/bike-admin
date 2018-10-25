import React from 'react'
import {Card, Spin, Icon, Alert} from 'antd'

export default class Loadings  extends React.Component{

    render(){
        const icon = <Icon type="loading"   style={{fontSize: 24}}/>
        const iconLoading = <Icon type="loading"   style={{fontSize: 24}}/>
        return (
             <div>
                 <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin: '0 10px'}}/>
                    <Spin size="large"/>     
                    <Spin indicator={icon} style={{marginLeft: 10}}/>               
                 </Card>
                 <Card title="内容遮罩">                    
                          <Alert
                            message="React"
                            description="欢迎来到安可的网站"
                            type="info"
                          />
                       <Spin tip="Loading" indicator={iconLoading}>
                           <Alert
                            message="React"
                            description="欢迎来到安可的网站"
                            type="warning"
                          />
                       </Spin>
                       <Spin tip="Loading">
                          <Alert
                              message="React"
                              description="欢迎来到安可的网站"
                              type="success"
                            />
                      </Spin>
                 </Card>
                
             </div>
        );
    }
}