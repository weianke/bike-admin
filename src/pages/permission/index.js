import React from 'react'
import {Card, Button, Modal} from 'antd'
import axios from './../../axios'
import Etable from './../../components/ETable'
import Utils from './../../utils/utils'

export default class Permission extends React.Component {

  state = {}
  
  componentWillMount () {
    axios.requestList(this, '/role/list',{},true)
  }

  render (){
    const columns = [
      {
          title: '角色ID',
          dataIndex: 'id'
      }, {
          title: '角色名称',
          dataIndex: 'role_name'
      },{
          title: '创建时间',
          dataIndex: 'create_time',
          render: Utils.formateDate
      }, {
          title: '使用状态',
          dataIndex: 'status',
          render(status){
              if (status == 1) {
                  return "启用"
              } else {
                  return "停用"
              }
          }
      }, {
          title: '授权时间',
          dataIndex: 'authorize_time',
          width: 160,
          render: Utils.formateDate
      }, {
          title: '授权人',
          dataIndex: 'authorize_user_name',
      }
  ];
    return (
      <div>
        <Card>
            <Button type="primary">创建角色</Button>
            <Button type="primary">设置权限</Button>
            <Button type="primary">用户授权</Button>
        </Card>
        <div className="content-wrap">
          <Etable   columns={columns}
                    selectedRowKeys={this.state.selectedRowKeys}
                    dataSource={this.state.list} 
                    updateSelectedItem={Utils.updateSelectedItem.bind(this)}/>
        </div>
      </div>
    );
  }
}