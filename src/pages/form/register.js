import React from 'react'
import { Card, Form , Buuton, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message } from 'antd'
import './../ui/ui.less'
const FormItem = Form.Item;

class FormRegister extends React.Component{

    render(){
      const {getFieldDecorator} = this.props.form;
       return(
          <div>
            <Card title="注册表单">
              <Form layout="horizontal">
                <FormItem label="用户名">
                     {
                              getFieldDecorator('userName',{
                                  initialValue: '',
                                  rules: [
                                      {
                                          required: true,
                                          message: '用户名不能为空'
                                      },
                                      {
                                          min: 5,max: 10,
                                          message: '长度不符合要求'
                                      },
                                      {
                                          pattern: /^\w/g,
                                          message: '用户名必须为字母或者数字'
                                      }
                                  ]
                              })( <Input  placeholder="请输入用户名"/>  )
                          }
                </FormItem>
                <FormItem label="密码">
                      {
                              getFieldDecorator('userPwd',{
                                  initialValue: '',
                                  rules: []
                              })( <Input  placeholder="请输入密码"/>  )
                          }
                </FormItem>
                <FormItem label="密码">
                      {
                              getFieldDecorator('userPwd',{
                                  initialValue: '',
                                  rules: []
                              })( <Input placeholder="请输入密码"/>  )
                          }
                </FormItem>            
              </Form>
            </Card>
          </div>
       );
    }
}

export default Form.create()(FormRegister);

