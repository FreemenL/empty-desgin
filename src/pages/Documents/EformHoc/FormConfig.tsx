import React,{ Component } from 'react';
import { TimePicker , InputNumber , Select } from 'antd';
import moment from 'moment';
import freetool from 'freetool';
import {  EcolorPicker , Prompt } from'emptyd';

const Option = Select.Option;
const { GetType } = freetool;
const format = 'HH:mm';


export const FormConfig = function(this:any,params){
    const that = this;
    const result:any = {
          searchPanel:{
            search:[
            {  // 筛选项  
                field:'name',
                label:"班次名称",
                type:"Input",
                inputConfig:{// antd input 配置
                  placeholder:"名称"
                },
                //antd ->Form.Item 配置
                antdFormItemOptions:{ 
                  colon:false
                },
                //antd ->getFieldDecorator(id, options)    antdOptions对应 options 配置
                antdOptions:{
                 initialValue:(that&&that.params)?that.params.name:"",
                 rules: [{
                    required: true,
                    message: '请输入班次名称',
                  }]
                }
              },{
                field:'startTime',
                type:"Custom",//自定义类型  
                label:"上班时间",
                renderCustom:(
                      TimePicker 
                ),
                antdFormItemOptions:{
                  colon:false
                },
                CustomConfig:{
                  format
                },
                antdOptions:{
                 initialValue:(that&&that.params)?moment(that.params.startTime,format):moment(),
                 rules: [{
                    required: true,
                    message: '请输入上班时间',
                  }]
                }
            },{
                field:'duration',
                type:"Custom",//自定义类型  
                label:"午休时间",
                renderCustom:(
                InputNumber
                ),
                CustomConfig:{
                    placeholder:"请选择时间"
                },
                antdFormItemOptions:{
                colon:false
                },
                antdOptions:{
                initialValue:(that&&that.params)?that.params.duration:0,
                rules: [{
                    required: true,
                    message: '请输入时间',
                }]
                }
            },{
                field:'timePicker',
                type:"DatePicker",
                label:"日期选择",
                DatePickerConfig:{// antd input 配置
                  placeholder:"日期选择",
                },
                antdFormItemOptions:{
                  colon:false
                },
                antdOptions:{
                    rules: [{
                       required: true,
                       message: '请输入时间',
                     }]
                }
            },{
                field:'case1o2',
                type:"Custom",//自定义类型  
                label:"下拉选择",
                renderCustom:(
                    class extends Component<any,any>{
                      constructor(props){
                        super(props);
                        this.handleChange = this.handleChange.bind(this);
                      }
                      handleChange(value){
                        this.props.onChange(value)
                      }
                      render(){
                        const initialValue = this.props['data-__meta']["rules"][0]["initialValue"];
                        const values = this.props.value;
                        return(
                          <Select onChange={this.handleChange} value={values||initialValue} placeholder="下拉选择框">
                            <Option value={1}>内勤班次</Option>
                            <Option value={2}>外勤班次</Option>
                          </Select>
                        )
                      }
                    }
                ),
                antdOptions:{
                    rules: [{
                       required: true,
                       message: '请输入时间',
                     }]
                },
                antdFormItemOptions:{
                  colon:false
                }
            },{  // 筛选项  
                field:'name1',
                label:"班次名称",
                type:"Input",
                inputConfig:{// antd input 配置
                  placeholder:"名称"
                },
                //antd ->Form.Item 配置
                antdFormItemOptions:{ 
                  colon:false
                },
                //antd ->getFieldDecorator(id, options)    antdOptions对应 options 配置
                antdOptions:{
                 initialValue:(that&&that.params)?that.params.name:"",
                 rules: [{
                    required: true,
                    message: '请输入班次名称',
                  }]
                }
              },{  // 筛选项  
                field:'name2',
                label:"班次名称",
                type:"Input",
                inputConfig:{// antd input 配置
                  placeholder:"名称"
                },
                //antd ->Form.Item 配置
                antdFormItemOptions:{ 
                  colon:false
                },
                //antd ->getFieldDecorator(id, options)    antdOptions对应 options 配置
                antdOptions:{
                 initialValue:(that&&that.params)?that.params.name:"",
                 rules: [{
                    required: true,
                    message: '请输入班次名称',
                  }]
                }
              },{
                field:'color',
                type:"Custom",//自定义类型  
                label:"班次标记",
                renderCustom:(
                    class InputColor extends Component<any,any>{

                        constructor(props){
                            super(props);
                            this.handleChange = this.handleChange.bind(this);
                        }
                    
                        handleChange(color, event){
                            this.props.onChange(color.hex);
                        }
                    
                        render(){
                            return(
                                <EcolorPicker handleChange={this.handleChange} width="100%" />
                            )
                        }
                    }
                ),
                antdFormItemOptions:{
                  colon:false,
                },
                tag:"InputColor",
                antdOptions:{
                 initialValue:(that&&that.params)?that.params.color:"#f40",
                 rules: [{
                    required: true,
                    message: '请选择标记',
                  }]
                }
            },{
                field:'caseNo2',
                type:"CheckboxGroup",
                label:"喜欢的水果",
                checkboxGroupConfig:{
                   options:['Apple', 'Pear', 'Orange']
                },
                antdOptions:{
                  rules: [{
                     required: true
                   }]
                 },
                antdFormItemOptions:{
                  colon:false
                },
            },{
                field:'uploadImage',
                type:"uploadImage",
                label:"附件图片",
                tag:"uploadImage",
                uploadImgConfig:{
                },
                antdOptions:{
                 initialValue:[{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542869766716&di=3f9a2a6f5c5b2c950fab91a7212c78ce&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd439b6003af33a8724e4b645cb5c10385243b5e0.jpg",fileId:123}],
                 rules: [{
                    required: false,
                    message: '请选择图片',
                  }]
                },
                antdFormItemOptions:{
                  colon:false
                },
              }
              ],
            //提交函数
          submit:function(this:any,e,parent){
              e.preventDefault();
              this.props.form.validateFields((err, values) => {
                if (!err) {
                  Reflect.ownKeys(values).forEach((item,index)=>{
                    if((typeof values[item]!=="number")&&values[item].constructor&&values[item].constructor.name=="Moment"||values[item].constructor.name=="_"){
                      values[item] = values[item].format(format);
                    }
                  })
                  Prompt["success"]("提交成功！具体数据可log查看");
                }
              });
          }
        }
    }
    if(GetType(that)==="undefined"){
      result.searchPanel.search.forEach((item,index)=>{
         if( item.antdOptions&& item.tag!=="InputColor"&&item.tag!=="uploadImage"){ delete item.antdOptions.initialValue };
         if(index!==0&&item.antdOptions){item.antdOptions.initialValue = null};
      })
    }
    return result
  }