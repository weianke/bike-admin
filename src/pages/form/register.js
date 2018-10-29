import React from 'react'
import { Card, Form , Buuton, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd'
import moment from 'moment'
import './../ui/ui.less'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

class FormRegister extends React.Component{

    render(){
      const {getFieldDecorator} = this.props.form;
      const formItemLayout = {
        labelCol: {
            xs: 24,
            sm: 4
        },
        wrapperCol: {
            xs: 24,
            sm: 12
        }
      }
       return(
          <div>
            <Card title="注册表单">
              <Form layout="horizontal">
                <FormItem label="用户名" {...formItemLayout}>
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
                <FormItem label="密码" {...formItemLayout}>
                      {
                              getFieldDecorator('userPwd',{
                                  initialValue: '',
                                  rules: []
                              })( <Input  placeholder="请输入密码"/>  )
                          }
                </FormItem>
                 <FormItem label="性别" {...formItemLayout}>
                      {
                              getFieldDecorator('gender', {
                                  initialValue: '1'
                              })( <RadioGroup>
                                      <Radio value="1">男</Radio>
                                      <Radio value="2">女</Radio>                                      
                                  </RadioGroup>  
                            )
                          }
                </FormItem>
                 <FormItem label="年龄" {...formItemLayout}>
                      {
                              getFieldDecorator('age', {
                                  initialValue: '18'
                              })( <InputNumber /> )
                          }
                </FormItem>     
                  <FormItem label="当前状态" {...formItemLayout}>
                      {
                              getFieldDecorator('state', {
                                  initialValue: '4'
                              })( <Select>
                                    <Option value="1">咸鱼一条</Option>
                                    <Option value="2">风华浪子</Option>
                                    <Option value="3">北大材质一枚</Option>
                                    <Option value="4">淘宝FED团队</Option>
                                    <Option value="5">创业</Option>                                    
                                 </Select> 
                              )
                          }
                </FormItem>
                  <FormItem label="爱好" {...formItemLayout}>
                      {
                              getFieldDecorator('Hobby', {
                                  initialValue: ['2','1']
                              })( <Select mode="multiple">
                                    <Option value="1">游泳</Option>
                                    <Option value="2">打篮球</Option>
                                    <Option value="3">踢足球</Option>
                                    <Option value="4">跑步</Option>
                                    <Option value="5">乒乓球</Option>                                    
                                    <Option value="6">垒球</Option>                                    
                                    <Option value="7">羽毛球</Option>                                    
                                 </Select> 
                              )
                          }
                </FormItem>    
                <FormItem label="是否已婚" {...formItemLayout}>
                      {
                              getFieldDecorator('isMarried', {
                                  valuePropName: 'checked',
                                  initialValue: true
                              })( 
                                  <Switch />  
                              )
                          }
                </FormItem>     
                <FormItem label="日期" {...formItemLayout}>
                      {
                              getFieldDecorator('date', {
                                  initialValue: moment('2018-10-29')
                              })( 
                                  <DatePicker />  
                              )
                          }
                </FormItem>                        
              </Form>
            </Card>
          </div>
       );
    }
}

export default Form.create()(FormRegister);

