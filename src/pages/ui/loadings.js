import React from 'react'
import {Card, Button, Spin} from 'antd'

export default class Loadings  extends React.Component{

    render(){
        return (
             <div>
                 <Card title="Spin用法" className="card-wrap">
                    <Spin/>
                 </Card>
             </div>
        );
    }
}