import React from 'react'
import {Card, Table, Modal, Button, message} from 'antd';
import axios from './../../axios/index'
import Utils from './../../utils/utils'

export default class HightTable extends React.Component{

   state={
    dataSource2: []
  }

  params = {
    page: 1
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
        return item.key = index;
      })
      this.setState({
         dataSource: data
      });
      this.request();
  }

  // 动态获取mock数据
  request = () => {
     let _this = this;
      axios.ajax({
          url: '/table/list',
          data: {
            params: {
                page: this.params.page
            }
          }
      }).then((res)=>{
        console.log(res)
        if (res.code === 0){
            res.result.list.map((item, index) => {
                 return item.key = index;
            })
            this.setState({
              dataSource2: res.result.list,
              selectedRowKeys: [],
              selectedRows: null,
              pagination: Utils.pagination(res, (current)=>{
                _this.params.page = current;
                this.request();
              })
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

  // 多选执行删除动作
  handleDelete = (() => {
      // let key = this.state.selectedRowKeys;
      let rows = this.state.selectedRows;
      // console.log(`key: ${key} row: ${JSON.stringify(rows)}`);
      let ids = [];
      rows.map((item) => {
        return ids.push(item.id);
      })
      Modal.confirm({
        title:'删除提示',
        content: `您确定删除这些数据吗？${ids.join()}`,
        onOk: () => {
            message.success('删除成功');
            this.request();
        },
        onCancel: () => {

        }
      })
  })

    render(){
        const columns = [
      {
         title: 'id',
         width: 80,
         dataIndex: 'id'
      },
      {
         title: '用户名',
         width: 80,
         dataIndex: 'userName'
      },
      {
         title: '性别',
         width: 80,
         dataIndex: 'sex',
         render(sex){
           return sex === 1 ? '男': '女';
         }
      },
      {
         title: '状态',
         width: 80,
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
        width: 80,
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
        width: 120,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 120,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        width: 80,
        dataIndex: 'time'
      }
    ];

    const columns2 = [{
        title: 'id',
        width: 80,
        fixed: 'left',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        width: 80,
          fixed: 'left',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
          return sex === 1 ? '男' : '女';
        }
      },
      {
        title: '状态',
        width: 80,
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
        width: 80,
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
        width: 120,
        dataIndex: 'birthday'
      },
       {
         title: '生日',
         width: 120,
         dataIndex: 'birthday'
       },
        {
          title: '生日',
          width: 120,
          dataIndex: 'birthday'
        },
         {
           title: '生日',
           width: 120,
           dataIndex: 'birthday'
         },
          {
            title: '生日',
            width: 120,
            dataIndex: 'birthday'
          },
           {
             title: '生日',
             width: 120,
             dataIndex: 'birthday'
           },
           {
             title: '生日',
             width: 120,
             dataIndex: 'birthday'
           },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address'
          },
          {
            title: '早起时间',
            width: 80,
            dataIndex: 'time'
          }
    ];
    const rowSelection = {
        type: 'radio',
        selectedRowKeys: this.state.selectedRowKeys
    }
    const rowCheckSelection = {
        type: 'checkbox',
        selectedRowKeys: this.state.selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
        
            this.setState({
              selectedRowKeys,
              selectedRows
            })
        }
    }
      return (
          <div>
               <Card title="头部滚动表格">
               <Table 
                    bordered
                    columns={columns}
                    dataSource={this.state.dataSource2}
                    pagination={false}
                    scroll={{y: 500}}
               />
            </Card>
            <Card title="左侧固定表格" style={{marginTop: 10}}>
               <Table 
                    bordered
                    columns={columns2}
                    dataSource={this.state.dataSource2}
                    scroll={{x: 1920}}
               />
            </Card>
          </div>
      );
    }
}