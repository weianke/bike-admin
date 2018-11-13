import React from 'react'
import {Card} from 'antd'
import echartTheme from ''
// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'


export default class Bar extends React.Component {

  render (){
    return (
      <div>
        <Card title="柱形图表之一">

        </Card>
         <Card title="柱形图表之二">
            
        </Card>
      </div>
    );
  }
}