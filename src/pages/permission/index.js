import React from 'react'
import {Card, Button, Modal} from 'antd'
import Etable from './../../components/ETable'
import Utils from './../../utils/utils'

export default class Permission extends React.Component {

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
          render: Utils.formatTime
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
          render: Utils.formatTime
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
          <Etable   columns={columns} />
        </div>
      </div>
    );
  }
}