import React from 'react'
import {Card, Button, Form, Input, Select, Tree, Transfer, Modal, message} from 'antd'
import axios from './../../axios'
import Etable from './../../components/ETable'
import Utils from './../../utils/utils'
import menuConfig from './../../config/menuConfig'
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

export default class Permission extends React.Component {

  state = {
    isRoleVisible: false
  }
  
  componentWillMount () {
    axios.requestList(this, '/role/list',{},true)
  }

  // 角色提交
  handleRoleSubmit = () => {
      // 获取表单对象数据
     let data = this.roleForm.props.form.getFieldsValue();
     let _this = this;
     
     this.roleForm.props.form.validateFields((error, value)=> {
        if (error) {
            return ;
        } else {
            axios.ajax({
                url: '/role/create',
                data: {
                    params: data,
                    isMock: true
                }
            }).then((res) => {
               if(res.code === 0){
                   message.success('创建成功');
                   _this.setState({
                       isRoleVisible: false
                   })
                   _this.roleForm.props.form.resetFields();
                   axios.requestList(this, '/role/list',{},true)
               }
            })
        }
     })
  }

  // 创建角色
  handleRole = () => {
      this.setState({
          isRoleVisible: true
      })
  }

  // 设置权限
  handlePermission = () => {
    let item = this.state.selectedItem;
    console.log(item)

    if (!item ){
        Modal.info({
            title: '信息',
            content: '请选择一个用户'
        })
        return;
    }
    
    this.setState({
        isPrmVisible: true,
        detailInofo: item,
        menuInfo: item.menus
    })
  }

  // 提交权限树形
  handlePerEditSubmit = () => {
     let data = this.permForm.props.form.getFieldsValue();
     data.role_id = this.state.selectedItem.id;
     data.menus = this.state.menuInfo;
     axios.ajax({
         url: '/permission/edit',
         data: {
           params: {
             ...data
           },
           isMock: true
         }
     }).then((res) => {
        if (res) {
          this.setState({
            isPrmVisible: false
          })

          axios.requestList(this, '/role/list', {}, true)
        }
     })

  }

  // 用户授权
  handleUserAuth = () => {
        let item = this.state.selectedItem;
        console.log(item)

        if (!item) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return;
        }
        this.getRoleUserList(item.id);
          this.setState({
            isUserVisible: true,
            detailInfo: item
          })
        
  }

  getRoleUserList = (id) => {
      axios.ajax({
        url: '/role/user_list',
        data: {
          parsms: {
            id: id
          },
          isMock: true
        }
      }).then((res) => {
        if (res.code === 0) {
          this.getAuthUserList(res.result);
        }
      })
  }

  // 筛选目标用户
  getAuthUserList = (dataSource) => {
    const mockData = [];
    const targetKeys = [];
    if (dataSource && dataSource.length > 0) {
       for (let i = 0; i < dataSource.length;i++){
         const data = {
           key: dataSource[i].user_id,
           title: dataSource[i].user_name,
           status: dataSource[i].status
         }
         if (data.status === 1){
           targetKeys.push(data.key);
         }
          mockData.push(data);
       }
    }
     this.setState({
         mockData, targetKeys
       })
  }

  // 点击提交用户授权
  handleUserSubmit = () => {
     let data =  {};
     data.user_id = this.state.targetKeys;
     data.role_id = this.state.selectedItem.id;
     axios.ajax({
       url: '/permission/edit',
       data: {
         params: {
           ...data
         },
         isMock: true
       }
     }).then((res)=> {
        if (res.code === 0){
          this.setState({
            isUserVisible: false
          })
            axios.requestList(this, '/role/list', {}, true)
        }
     })

  }

  render (){
    const columns = [
      {
          title: '角色ID',
          dataIndex: 'id'
      }, {
          title: '角色名称',
          dataIndex: 'role_name'
      },{
          title: '创建时间',
          width: 160,
          dataIndex: 'create_time',
          render: Utils.formateDate
      }, {
          title: '使用状态',
          dataIndex: 'status',
          render(status){
              if (status == 1) {
                  return "启用"
              } else {
                  return "停用"
              }
          }
      }, {
          title: '授权时间',
          dataIndex: 'authorize_time',
          width: 160,
          render: Utils.formateDate
      }, {
          title: '授权人',
          dataIndex: 'authorize_user_name',
      }
  ];
    return (
      <div>
        <Card>
            <Button type="primary" onClick={this.handleRole}>创建角色</Button>
            <Button type="primary" onClick={this.handlePermission}>设置权限</Button>
            <Button type="primary" onClick={this.handleUserAuth}>用户授权</Button>

        </Card>
        <div className="content-wrap">
          <Etable   columns={columns}
                    selectedRowKeys={this.state.selectedRowKeys}
                    dataSource={this.state.list} 
                    updateSelectedItem={Utils.updateSelectedItem.bind(this)}/>
        </div>
              <Modal
                    title="创建角色"
                    visible={this.state.isRoleVisible}
                    onOk={this.handleRoleSubmit}
                    onCancel={()=>{
                        this.roleForm.props.form.resetFields(); // 表单重置
                        this.setState({
                            isRoleVisible:false
                        })
                    }}
                >
                    <RoleForm wrappedComponentRef={(inst) => this.roleForm = inst }/>
                </Modal>
                <Modal title="设置权限"
                        visible={this.state.isPrmVisible}
                        width={600}
                        onOk={this.handlePerEditSubmit}
                        onCancel={()=>{
                            this.setState({
                                isPrmVisible: false
                            })
                        }}>
                        <PermEditForm 
                              wrappedComponentRef={(inst) => this.permForm = inst }
                              detailInofo={this.state.detailInofo}  
                              menuInfo={this.state.menuInfo}
                              patchMenuInfo={(checkedKeys)=> {
                                     this.setState({
                                          menuInfo: checkedKeys
                                      })  }}/>
                </Modal>
                <Modal title="用户授权"
                       visible={this.state.isUserVisible}
                       width={800}
                       onOk={this.handleUserSubmit}
                       onCancel={()=>{
                            this.setState({
                                isUserVisible: false
                            })
                        }}>
                  <RoleAuthForm 
                              wrappedComponentRef={(inst) => this.userAuthForm = inst }
                              detailInfo={this.state.detailInfo}  
                              targetKeys={this.state.targetKeys}
                              mockData={this.state.mockData}
                              patchUserInfo={(targetKeys)=> {
                                this.setState({
                                    targetKeys: targetKeys
                                })
                              }}
                              />
                  
                </Modal>
      </div>
    );
  }
}


// 角色创建
class RoleForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 16}
        };
        return (
            <Form layout="horizontal">
                <FormItem label="角色名称" {...formItemLayout}>
                    {
                        getFieldDecorator('role_name',{
                            initialValue:'',
                            rules: [
                                {
                                    required: true,
                                    message: '角色名称不能为空'
                                }
                            ]
                        })(
                            <Input type="text" placeholder="请输入角色名称"/>
                        )
                    }
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        getFieldDecorator('state',{
                            initialValue:1
                        })(
                        <Select>
                            <Option value={1}>开启</Option>
                            <Option value={0}>关闭</Option>
                        </Select>
                    )}
                </FormItem>
            </Form>
        );
    }
}
RoleForm = Form.create({})(RoleForm);


class PermEditForm extends React.Component {


  onCheck = (checkedKeys) => {
      this.props.patchMenuInfo(checkedKeys);
  }
  
  renderTreeNodes = (data) => {
     return data.map((item) => {
        if (item.children){
            return <TreeNode title={item.title} key={item.key}>
                {this.renderTreeNodes(item.children)}
            </TreeNode>
        } else {
          return <TreeNode {...item} />
        }
     })
  }

  render () {
      const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 5},
      wrapperCol: {span: 19}
    }
    const  detail_inofo = this.props.detailInofo;
    const  menu_info = this.props.menuInfo;
    return (
        <Form layout="horizontal">
          <FormItem label="角色名称" {...formItemLayout}>
              <Input disabled placeholder={detail_inofo.role_name}/>
          </FormItem>
           <FormItem label="状态" {...formItemLayout}>
              {
                getFieldDecorator('status', {
                  initialValue: '1'
                })(
                   <Select>
                      <Option value="1">启用</Option> 
                      <Option value="0">停用</Option> 
                   </Select>
                )
              }
          </FormItem>
          <Tree
                checkable
                defaultExpandAll
                onCheck={(checkedKeys) => {
                  this.onCheck(checkedKeys)
                }}
                checkedKeys={menu_info}
          >
             <TreeNode title="平台权限" key="platform_all">
                {this.renderTreeNodes(menuConfig)}
             </TreeNode>
          </Tree>
        </Form>
    );
  }
}

PermEditForm = Form.create({})(PermEditForm);

class RoleAuthForm extends React.Component {


  filterOption = (inputValue, option) => {
    return option.title.indexOf(inputValue) > -1;
  }

    handleChange = (targetKeys) => {
      this.props.patchUserInfo(targetKeys)
   }

  render() {
     const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 5},
      wrapperCol: {span: 19}
    }
    const detail_inofo = this.props.detailInfo;
    return (
        <Form layout="horizontal">
          <FormItem label="角色名称" {...formItemLayout}>
              <Input disabled placeholder={detail_inofo.role_name}/>
          </FormItem>
           <FormItem label="选择用户" {...formItemLayout}>
          <Transfer 
                listStyle={{width: 200, height: 400}}
                dataSource={this.props.mockData}
                titles={['待选用户','已选用户']}
                showSearch
                searchPlaceholder='输入用户名'
                filterOption={this.filterOption}
                targetKeys={this.props.targetKeys}
                render={item => item.title}
                 onChange={this.handleChange}/>
           </FormItem>
        </Form>
    );
  }
}

RoleAuthForm = Form.create({})(RoleAuthForm);
