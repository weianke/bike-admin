import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    componentWillMount(){
      const menuTreeNode =  this.renderMenu(MenuConfig);

      this.setState({
        menuTreeNode
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
        return <Menu.Item  key={item.key}>{item.title}</Menu.Item>
      })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Bike Admin</h1>
                </div>
                <Menu theme="dark">
                   {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}