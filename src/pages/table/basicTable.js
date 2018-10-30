import React from 'react'
import {Card, Table} from 'antd';
import axios from 'axios'

export default class BasicTable extends React.Component{

  state={
    dataSource2: []
  }

  componentDidMount(){
      const data = [
        {
            id: '0',
            userName: 'Jack',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '1990-03-10',
            address: '北京望京',
            time: '09:00'
        },
         {
           id: '1',
           userName: 'Snke',
           sex: '1',
           state: '1',
           interest: '1',
           birthday: '1990-03-10',
           address: '北京望京',
           time: '09:00'
         },
          {
            id: '2',
            userName: 'Lili',
            sex: '1',
            state: '1',
            interest: '1',
            birthday: '1990-03-10',
            address: '北京望京',
            time: '09:00'
          },
      ];
      this.setState({
         dataSource: data
      });
      this.request();
  }

  // 动态获取mock数据
  request = () => {
      let baseUrl = 'https://www.easy-mock.com/mock/5bd7fc702f07612e0212412d/mockapi';
      axios.get(baseUrl + '/table/list').then((res) => {
          console.log(res)
      })
  }

  render(){
    const columns = [
      {
         title: 'id',
         dataIndex: 'id'
      },
      {
         title: '用户名',
         dataIndex: 'userName'
      },
      {
         title: '性别',
         dataIndex: 'sex'
      },
      {
         title: '状态',
         dataIndex: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest'
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ]
    return (
        <div>
            <Card title="基础表格">
               <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={false}
               />
            </Card>
            <Card title="动态数据渲染表格" style={{marginTop: 10}}>
               <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource2}
               />
            </Card>
        </div> 
    );
  }
}