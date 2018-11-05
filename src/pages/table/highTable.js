import React from 'react'
import {Card, Table, Modal, Button, message ,Badge} from 'antd';
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
          url: '/table/high/list',
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
      let selectKey = [index];
      this.setState({
        selectedRowKeys: selectKey,
        selectedItem: record
      })
  }

  // 删除动作
  handleDelete = (item) => {
    console.log(item);
    // let id = item.id;
    Modal.confirm({
      title: '确认',
      content: '您确认要删除此条数据吗',
      onOk: () => {
        message.success('删除成功');
        this.request();
      }
    })
  }

    hanleChange = (pagination, filters, sorter) => {
        this.setState({ sortOrder: sorter.order })
    }

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
         dataIndex: 'birthday2'
       },
        {
          title: '生日',
          width: 120,
          dataIndex: 'birthday3'
        },
         {
           title: '生日',
           width: 120,
           dataIndex: 'birthday4'
         },
          {
            title: '生日',
            width: 120,
            dataIndex: 'birthday5'
          },
           {
             title: '生日',
             width: 120,
             dataIndex: 'birthday6'
           },
           {
             title: '生日',
             width: 120,
             dataIndex: 'birthday7'
           },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address8'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address188'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address8828'
          },
          {
            title: '地址',
            width: 120,
            dataIndex: 'address8838'
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
    const columns3 = [{
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
        title: '年龄',
        width: 80,
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: this.state.sortOrder
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

    const column4 = [
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
                '1': '青春年少',
                '2': '风华浪子',
                '3': '北大才子',
                '4': '百度FE',
                '5': '创业者'
            }
            return config[state];
         }
      },
      {
        title: '预警',
        width: 80,
        dataIndex: 'interest',
        render(interest) {
            let config = {
                '1': <Badge status="success" text="成功" />,
                '2': <Badge status="error" text="报错" />,
                '3': <Badge status="default" text="正常" />,
                '4': <Badge status="processing" text="进行中" />,
                '5': <Badge status="warning" text="警告" />,
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
        title: '操作',
        width: 80,
        render:(text, item, index) => {
          return <Button size="small" onClick={(item) => {this.handleDelete(item)}}>删除</Button> 
        }
      }
    ];

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
             <Card title="表格排序" style={{marginTop: 10}}>
               <Table 
                    bordered
                    columns={columns3}
                    dataSource={this.state.dataSource2}
                    onChange={this.hanleChange}
               />
            </Card>
             <Card title="操作按钮" style={{marginTop: 10}}>
               <Table 
                    bordered
                    columns={column4}
                    dataSource={this.state.dataSource2}
                    onChange={this.hanleChange}
               />
            </Card>
          </div>
      );
    }
}