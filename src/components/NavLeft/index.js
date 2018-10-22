import React from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {

    render() {

        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Bike Admin</h1>
                </div>
                <Menu theme="dark">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}