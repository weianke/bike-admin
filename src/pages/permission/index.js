import React from 'react'
import {Card, Button, Form, Input, Select, Tree, Transfer, Modal, message} from 'antd'
import axios from './../../axios'
import Etable from './../../components/ETable'
import Utils from './../../utils/utils'
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

    if (!item ){
        Modal.info({
            title: '信息',
            content: '请选择一个用户'
        })
        return;
    }
    
    this.setState({
        isPrmVisible: true,
        detailInofo: item
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
            <Button type="primary">用户授权</Button>
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
                        }}
                >

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
