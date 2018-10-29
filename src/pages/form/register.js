import React from 'react'
import { Card, Form , Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, InputNumber } from 'antd'
import moment from 'moment'
import './../ui/ui.less'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{
       
      state={}

      handleSubmit = () => {
          let userInfo = this.props.form.getFieldsValue();
          console.log(userInfo)
      }

      getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg: imageUrl,
            loading: false,
          }));
        }
    }


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
      const offsetLayout = {
        wrapperCol: {
          xs: 24,
          sm: {
              span: 12, 
              offset:4
          }
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
                              })( <Input type="password" placeholder="请输入密码"/>  )
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
                <FormItem label="生日" {...formItemLayout}>
                      {
                              getFieldDecorator('date', {
                                  initialValue: moment('2018-10-29 12:00:00')
                              })( 
                                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>  
                              )
                          }
                </FormItem>
                 <FormItem label="联系地址" {...formItemLayout}>
                      {
                              getFieldDecorator('address', {
                                  initialValue: ''
                              })( 
                                  < TextArea autosize={{
                                      minRows:4, 
                                      maxRow: 6
                                  }}/ >
                              )
                          }
                </FormItem>
                <FormItem label="早起时间" {...formItemLayout}>
                      {
                              getFieldDecorator('time', {
                                  initialValue: ''
                              })( <TimePicker />)
                          }
                </FormItem>
                  <FormItem label="上传头像" {...formItemLayout}>
                      {
                              getFieldDecorator('userImg', {
                                  initialValue: ''
                              })( <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                     action="//jsonplaceholder.typicode.com/posts/"
                                     onChange={this.handleChange}
                              >{this.state.userImg ? <img src={this.state.userImg} alt="背景图"/> : <Icon type="plus" />}</Upload>)
                          }
                </FormItem> 
                  <FormItem  {...offsetLayout} labelCol={{offset: 3}}>
                      {
                              getFieldDecorator('check', {
                                  initialValue: ''
                              })( <Checkbox >我已阅读过协议<a href=""></a>ant协议</Checkbox>)
                          }
                </FormItem>
                 <FormItem  {...offsetLayout} labelCol={{offset: 3}}>
                     <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                </FormItem>                                           
              </Form>
            </Card>
          </div>
       );
    }
}

export default Form.create()(FormRegister);

