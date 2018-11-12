import React from 'react'
import {Card, Form} from 'antd'
import BaseFrom from '../../components/BaseForm'
import axios from './../../axios'

export default class BikeMap extends React.Component {

    state = {}

    map = ''

    params = {
      page: 1
    }

    formList = [
       {
        type: '时间查询'
      },{
        type: 'SELECT',
        label: '订单状态',
        field: 'order_status',
        placeholder: '全部',
        initialValue: '0',
        list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
      }
    ];

      componentDidMount() {
        this.requestList();
      }

    requestList = () => {
        axios.ajax({
          url: '/map/bike_list',
          data: {
             params: this.params,
             isMock: true
          }
        }).then((res) => {
           if (res.code === 0) {
               this.setState({
                total_count: res.result.total_count
               })

               this.renderMap(res);
           }
        });
    }

    handleFilterSubmit = (filterParams) => {
      this.params = filterParams;
      this.requestList();
    }

    renderMap = (res) => {
        let list = res.result.route_list;
        this.map = new window.BMap.Map('container');
        let gps1 = list[0].split(',');
        this.map.enableScrollWheelZoom(true);
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1 ].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);

        this.map.centerAndZoom(endPoint,11);
        let startPonitIcon =new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42)
        })

           // icon需要依赖于marker
         let startMarker = new window.BMap.Marker(startPoint,{icon: startPonitIcon});
         // 开始坐标icon
         this.map.addOverlay(startMarker);

          let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(18,42)
          })

          // icon需要依赖于marker
          let endMarker = new window.BMap.Marker(endPoint, {
            icon: endIcon
          });
          // 结束坐标icon
          this.map.addOverlay(endMarker);

          // 绘制路线行驶路线
          let routeList = [];
          list.forEach((item) => {
            let p = item.split(',');
            console.log(p);
            routeList.push(new window.BMap.Point(p[0], p[1]));
          });

          let polyLine = new window.BMap.Polyline(routeList, {
              strokeColor: '#ef4136',
              strokeWeight: 2,
              strokeOpacity: 1
          })
          this.map.addOverlay(polyLine);

          // 绘制服务区
          let servicePointList = [];
          let serviceList = res.result.service_list;
          serviceList.forEach(item => {
            servicePointList.push(new window.BMap.Point(item.lon, item.lat))
          });

          let polyServiceLine = new window.BMap.Polyline(servicePointList, {
              strokeColor: '#ef4136',
              strokeWeight: 2,
              strokeOpacity: 1
          })

          this.map.addOverlay(polyServiceLine);

          // 参加地图中的自行车坐标
          let bikeList = res.result.bike_list;
          let bikeIcon = new window.BMap.Icon('/assets/bike.jpg', new window.BMap.Size(36, 42), {
              imageSize: new window.BMap.Size(36, 42),
              anchor: new window.BMap.Size(18, 42)
          })
          bikeList.forEach((item)=>{
            let p = item.split(',');
            let point = new window.BMap.Point(p[0], p[1]);
            let bikeMarker = new window.BMap.Marker(point, {
              icon: bikeIcon
            })
             this.map.addOverlay(bikeMarker);
          })
    }

    render(){
      return(
          <div>
              <Card>
                  <BaseFrom formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
              </Card>
              <Card style={{marginTop: 10}}>
                  <div>共{this.state.total_count}辆车</div>
                  <div id="container" style={{height: 500}} ></div>
              </Card>
          </div>
      );
    }
}
