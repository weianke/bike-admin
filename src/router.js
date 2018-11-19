import React from 'react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import App from './App'
import Login from './pages/login/index'
import Admin from './admin'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carouserl from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import NoMatch from './pages/noMatch'
import City from './pages/city/index'
import Order from './pages/order/index'
import Common from './common'
import OrderDetail from './pages/order/detail'
import User from './pages/user/index'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar'
import Pie from './pages/echarts/pie'
import Line from './pages/echarts/line'
import RichText from './pages/rich'
import Permission from './pages/permission'



export default class IRouter extends React.Component{
   
    render () {
      return (
         <HashRouter>
            <App>
              <Switch>
               <Route path="/login" component={Login}/>
               <Route path="/common"  render={() => 
                    <Common>
                        <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                    </Common>
                }></Route>
              
               <Route path="/" render={()=>
                  <Admin>
                      <Switch>         
                        <Route path="/home" component={Home}/>
                        <Route path="/ui/buttons" component={Buttons}/>
                        <Route path="/ui/modals" component={Modals}/>  
                        <Route path="/ui/loadings" component={Loadings}/>     
                        <Route path="/ui/notification" component={Notice}/>
                        <Route path="/ui/messages" component={Messages}/>
                        <Route path="/ui/tabs" component={Tabs}/>  
                        <Route path="/ui/gallery" component={Gallery}/>
                        <Route path="/ui/carousel" component={Carouserl}/>
                        <Route path="/form/login" component={FormLogin}/>
                        <Route path="/form/reg" component={FormRegister}/>
                        <Route path="/table/basic" component={BasicTable}/>
                        <Route path="/table/high" component={HighTable}/>  
                        <Route path="/city" component={City} /> 
                        <Route path="/order" component={Order} />
                        <Route path="/user" component={User} />  
                        <Route path="/BikeMap" component={BikeMap} /> 
                        <Route path="/charts/bar" component={Bar} />
                        <Route path="/charts/pie" component={Pie} />    
                        <Route path="/charts/line" component={Line} /> 
                        <Route path="/rich" component={RichText} />  
                        <Route path="/permission" component={Permission} /> 
                        <Redirect to="/home" />
                        <Route component={NoMatch}/>
                      </Switch>
                  </Admin>
                } />
              </Switch>
             </App>
         </HashRouter>
      );
    }
}