import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios/index' 
import {connect} from 'react-redux'
class Header extends React.Component{

    componentWillMount(){
      this.setState({
        userName: '安可'
      })
      setInterval(() => {
        let sysTime = Util.formateDate(new Date().getTime());

        this.setState({
            sysTime
        })
      }, 1000);
      this.getWeatherAPIData();
    }

    getWeatherAPIData(){
      let city = '北京';
        axios.jsonp({
          url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
          // console.log(res)
          if (res.status === 'success') {
            let data = res.results[0].weather_data[0];
            let PM = res.results[0].pm25;
            this.setState({
              dayPicture: data.dayPictureUrl,
              weather: data.weather,
              temperature: data.temperature,
              wind: data.wind,
              pmValue: PM
            })
          }
        })
    }
    render(){
        const {menuName, menuType} = this.props;
        return (
            <div className="header">
              <Row className="header-top">
                  {
                    menuType ? 
                    <Col span="6" className="logo">
                      <img src="/assets/logo-ant.svg" alt="logo" />
                      <span>Bike-admin 后台管理系统</span>
                    </Col> : ''
                  } 
                  <Col span={menuType ? 18 : 24}>
                      <span>欢迎，{this.state.userName}</span>
                      <a href="">退出</a>
                  </Col>
              </Row> 
              {
                menuType ? '' : 
                 <Row className="breadcrumb">
                  <Col span="4" className = "breadcrumb-title" >
                     {menuName || '首页'}
                  </Col>
                   <Col span="20" className="weather">
                     <span className="date">{this.state.sysTime}</span>
                     <span className="weather-img">
                        <img src={this.state.dayPicture} alt=""/>
                     </span>
                     <span className="weather-PM">
                            PM2.5: {this.state.pmValue}                       
                     </span>
                     <span className="weather-detail">
                            {this.state.weather}   ~  {this.state.temperature}   {this.state.wind}                
                     </span>
                  </Col>
              </Row>
              }
             
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
      menuName: state.menuName
  }
};
export default connect(mapStateToProps)(Header)