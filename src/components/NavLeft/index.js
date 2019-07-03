import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import {connect} from 'react-redux'
import {switchMenu} from './../../redux/action'
import { NavLink } from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
  
    state={
      currentKey: ''
    }
    componentWillMount(){
      const menuTreeNode =  this.renderMenu(MenuConfig);
      // 通过window对象获取当前选中的导航
      let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
      this.setState({
        currentKey,
        menuTreeNode
      })
    }

    handleClick = ({item, key})=> {
      console.log(item)
      // 通过conect拿到dispatch方法
      // const {dispatch} = this.props;
       // 事件派发，自动调用reducer，通过reducer保存到store对象中
      // dispatch(switchMenu(item.props.title));
      this.props.switchMenu(item.props.title);

      this.setState({
        currentKey: key
      }) 
    }
    // 菜单渲染
    renderMenu = (data) => {
      return data.map((item) => {
        // 判断如果有下层子节点，继续递归遍历子节点
        if (item.children) {
          return (
            <SubMenu title={item.title} key={item.key}>
              {this.renderMenu(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item  title={item.title} key={item.key}>
                 <NavLink to={item.key}>{item.title}</NavLink>
              </Menu.Item>
      })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="./assets/logo-ant.svg" alt="" />
                    <h1>Bike Admin</h1>
                </div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.currentKey]}
                      theme="dark" mode="vertical">
                   {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    switchMenu: menuName => dispatch(switchMenu(menuName))
  }
}

export default connect(null, mapDispatchToProps)(NavLeft)