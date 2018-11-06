import React from 'react'
import {Card} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils'
import BaseForm from '../../components/BaseForm'
import './detail.less'


export default class Order extends React.Component {

   render(){
     return(
       <div>
          <Card>
              <div id="orderDatailMap" ></div>
              <div className="detail-items">
                  <div className="item-title">基础信息</div>
                  <ul className="detail-form">
                      <li>
                          <div className="detail-form-left">用车模式</div>
                          <div className="detail-form-content">sdfdafsafdafdsfa</div>
                      </li>
                       <li>
                          <div className="detail-form-left">订单编号</div>
                          <div className="detail-form-content">sdfdafsafdafdsfa</div>
                      </li>
                       <li>
                          <div className="detail-form-left">车辆编号</div>
                          <div className="detail-form-content">sdfdafsafdafdsfa</div>
                      </li>
                       <li>
                          <div className="detail-form-left">用户姓名</div>
                          <div className="detail-form-content">sdfdafsafdafdsfa</div>
                      </li>
                       <li>
                          <div className="detail-form-left">手机号码</div>
                          <div className="detail-form-content">sdfdafsafdafdsfa</div>
                      </li>
                  </ul>
              </div>
          </Card>
       </div>
     );
   }
}