import React from 'react'
import {Card, Button} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
import ETable from './../../components/ETable/index'
import BaseForm from './../../components/BaseForm'

export default class User extends React.Component{

    params = {
      page: 1
    };

    state = {}

    formList = [
       {
            type:'INPUT',
            label:'用户名',
            field:'user_name',
            placeholder:'请输入用户名称',
            width:100
        },
         {
           type: 'INPUT',
           label: '用户手机号',
           field: 'user_mobile',
           placeholder: '请输入用户手机号',
           width: 100
         },
        {
             type: 'DATE',
             label: '请选择入职日期',
             field: 'user_date',
             placeholder: '请选择日期',
             width: 80
        }
    ]

      componentDidMount() {
        this.requestList();
      }


    handleFilter = (params) => {
       this.params = params;
       this.requestList();
    }

    requestList = () => {
        let _this = this;
         axios.requestList(this, '/user/list', this.params, true);
    }

    render() {
      const columns = [
        {
          title: 'id',
          dateIndex: 'id'
        },
        {
          title: '用户名',
          dateIndex: 'username'
        },
         {
          title: '性别',
          dateIndex: 'sex'
        },
        {
          title: '状态',
          dateIndex: 'state'
        },
        {
          title: '爱好',
          dateIndex: 'interest'
        },
        {
          title: '生日',
          dateIndex: 'birthday'
        },
        {
          title: '联系地址',
          dateIndex: 'address'
        },
        {
          title: '早起时间',
          dateIndex: 'time'
        }
      ]
      return(
        <div>
          <Card>
              <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
          </Card>
          <Card>
                <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>     
          </Card>
          <div className="content-wrap">
            <ETable 
                  updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                  columns={columns}
                  selectedRowKeys={this.state.selectedItem}
                 dataSource={this.state.list}
                  pagination={this.state.pagination}
            />
          </div>
        </div>
      );
    }
}