import React from 'react'
import {Card, Table, Modal} from 'antd';
import axios from './../../axios/index'
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
      data.map((item, index)=>{
        item.key = index;
      })
      this.setState({
         dataSource: data
      });
      this.request();
  }

  // 动态获取mock数据
  request = () => {
      axios.ajax({
          url: '/table/list',
          data: {
            params: {
                page: 1
            }
          }
      }).then((res)=>{
        console.log(res)
        if (res.code === 0){
            res.result.map((item, index) => {
                item.key = index;
            })
            this.setState({
              dataSource2: res.result
            })
        }
      })
  }

  onRowClick = (record, index) => {
    console.log(record, index)
      // Modal.info({
      //   title: '信息',
      //   content: `用户名: ${record.userName}, 用户爱好：${record.interest}`
      // })
      let selectKey = [index];
      this.setState({
        selectedRowKeys: selectKey,
        selectedItem: record
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
         dataIndex: 'sex',
         render(sex){
           return sex === 1 ? '男': '女';
         }
      },
      {
         title: '状态',
         dataIndex: 'state',
         render(state) {
            let config = {
                '1': '咸鱼一条',
                '2': '风华浪子',
                '3': '北大才子',
                '4': '百度FE',
                '5': '创业者'
            }
            return config[state];
         }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest) {
            let config = {
                '1': '游泳',
                '2': '打篮球',
                '3': '踢足球',
                '4': '跑步',
                '5': '爬山',
                '6': '骑行',
                '7': '桌球',
                '8': '麦霸'
            }
            return config[interest];
         }
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
    const rowSelection = {
        type: 'radio',
        selectedRowKeys: this.state.selectedRowKeys
    }
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
            <Card title="动态数据渲染表格-Mock" style={{marginTop: 10}}>
               <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource2}
               />
            </Card>
            <Card title="Mock-单选" style={{marginTop: 10}}>
               <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource2}
                    rowSelection={rowSelection}
                    onRow={(record, index) => {
                      return {
                        onClick: () => {
                            this.onRowClick(record, index);
                        }
                      }                     
                    }}
               />
            </Card>
        </div> 
    );
  }
}