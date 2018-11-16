import React from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'
import echartTheme from './../echartTheme'
// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入饼图
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'



export default class Bar extends React.Component {

  componentWillMount() {
    echarts.registerTheme('bike', echartTheme);
  }

  getOption = () => {
    let option = {
        title: {
          text: '用户骑行订单'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: [
           '周一', '周二', '周三', '周四', '周五', '周六', '周日'
          ]
        },
        yAxis:{
          type: 'value'
        },
        series: [
          {
            name: '订单量',
            type: 'line',
            data: [
              1000,
              2000,
              800,
              1200,
              900,
              3000,
              2900
            ]
          }
        ]
    }

    return option;
  }

      getOption2(){
        let option = {     
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['OFO订单量', '摩拜订单量']
            },
            xAxis: {
              data: [
              '周一', '周二', '周三', '周四', '周五', '周六', '周日'
              ]
            },
            yAxis:{
              type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    data: [
                       300,
                       2000,
                       8300,
                       200,
                       3400,
                       1000,
                       1900
                    ],
                   
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    data: [
                       1200,
                       2300,
                       3400,
                       1200,
                       3900,
                       900,
                       100
                    ],
                   
                }
            ]
        }
        return option;
        
    }


          getOption3(){
        let option = {     
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['OFO订单量', '摩拜订单量']
            },
            xAxis: {
              type: 'category',
              boundaryGap: 'false',
              data: [
              '周一', '周二', '周三', '周四', '周五', '周六', '周日'
              ]
            },
            yAxis:{
              type: 'value'
            },
            series: [
                {
                    name: 'OFO订单量',
                    type: 'line',
                    data: [
                       300,
                       2000,
                       8300,
                       200,
                       3400,
                       1000,
                       1900
                    ],
                    areaStyle: {}
                   
                },
                {
                    name: '摩拜订单量',
                    type: 'line',
                    data: [
                       1200,
                       2300,
                       3400,
                       1200,
                       3900,
                       900,
                       100
                    ],
                   
                }
            ]
        }
        return option;
        
    }
  render (){
    return (
      <div>
        <Card title="折线图表之一">
            <ReactEcharts option={this.getOption()}
                          theme="bike"
                          style={{height: 500}}
                          notMerge={true} lazyUpdate={true}
            />
        </Card>
         <Card title="折线图表之二" style={{marginTop: 10}}>
             <ReactEcharts option={this.getOption2()}  notMerge={true} lazyUpdate={true}
                          theme="bike"
                          style={{height: 500}}
            />
        </Card>
          <Card title="折线图表之三" style={{marginTop: 10}}>
             <ReactEcharts option={this.getOption3()}  notMerge={true} lazyUpdate={true}
                          theme="bike"
                          style={{height: 500}}
            />
        </Card>
      </div>
    );
  }
}