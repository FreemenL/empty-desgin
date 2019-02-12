import React,{ Component } from 'react';
import {  Select,TimePicker , InputNumber,Input } from 'antd';
import moment from 'moment';
import freetool from 'freetool';

const { GetType } = freetool;
const Option = Select.Option
const format = 'HH:mm';

export const emptyFormConfig = function(this:any,params){
  const that = this;
  const result:any = {
        Rowlayout:{ type:"flex",justify:"start" },
        searchPanel:{
          search:[{
              field:'dutyType',
              type:"Custom",//自定义类型  
              label:"班次类型",
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
              antdFormItemOptions:{
                colon:false
              },
              antdOptions:{
               initialValue:(that&&that.params)?that.params.dutyType:null,
               rules: [{
                  required: true,
                  message: '请选择班次类型',
                }]
              }
          },{  // 筛选项  
              field:'name',
              label:"班次名称",
              type:"Input",
              inputConfig:{// antd input 配置
                placeholder:"测试holder"
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
              field:'endTime',
              type:"Custom",//自定义类型  
              label:"下班时间",
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
               initialValue:(that&&that.params)?moment(that.params.endTime,format):moment(),
               rules: [{
                  required: true,
                  message: '请输入下班时间',
                }]
              }
          },{
              field:'startTimeStart',
              type:"Custom",//自定义类型  
              label:"开始(上班打卡)",
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
               initialValue:(that&&that.params)?moment(that.params.onRange.split("-")[0],format):moment(),
               rules: [{
                  required: true,
                  message: '请输入时间',
                }]
              }
          },{
              field:'startTimeEnd',
              type:"Custom",//自定义类型  
              label:"结束(上班打卡)",
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
               initialValue:(that&&that.params)?moment(that.params.onRange.split("-")[1],format):moment(),
               rules: [{
                  required: true,
                  message: '请输入时间',
                }]
              }
          },{
              field:'endTimeStart',
              type:"Custom",//自定义类型  
              label:"开始(下班打卡)",
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
               initialValue:(that&&that.params)?moment(that.params.offRange.split("-")[0],format):moment(),
               rules: [{
                  required: true,
                  message: '请输入时间',
                }]
              }
          },{
              field:'endTimeEnd',
              type:"Custom",//自定义类型  
              label:"结束(下班打卡)",
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
               initialValue:(that&&that.params)?moment(that.params.offRange.split("-")[1],format):moment(),
               rules: [{
                  required: true,
                  message: '请输入时间',
                }]
              }
          },{
              field:'duration',
              type:"Custom",//自定义类型  
              label:"午休时间",
              renderCustom:(
                InputNumber
              ),
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
          },
          // {
          //     field:'caseNo2',
          //     type:"uploadImage",
          //     label:"附件图片",
          //     tag:"uploadImage",
          //     uploadImgConfig:{
          //     },
          //     antdOptions:{
          //      initialValue:[{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542869766716&di=3f9a2a6f5c5b2c950fab91a7212c78ce&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd439b6003af33a8724e4b645cb5c10385243b5e0.jpg",fileId:123}],
          //      rules: [{
          //         required: false,
          //         message: '请选择图片',
          //       }]
          //     },
          //     antdFormItemOptions:{
          //       colon:false
          //     },
          //   }
            ],
          //提交函数
        submit:function(this:any,e,parent){
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
              // console.log(err,values);
              if (!err) {
                parent.Prompt["loading"]("数据提交中");
                Reflect.ownKeys(values).forEach((item,index)=>{
                  if(values[item].constructor.name=="Moment"||values[item].constructor.name=="_"){
                    values[item] = values[item].format(format);
                  }
                })
                if(that&&that.params&&that.params.id){values.id = that.params.id}
                values.onRange = `${values.startTimeStart}-${values.startTimeEnd}`;
                values.offRange = `${values.endTimeStart}-${values.endTimeEnd}`
                parent.ownAction.forEach((item,index)=>{
                  if(item.actionType=="DUTY_DATALIST_UPDATE"&&GetType(that)!=="undefined"){
                    delete values.endTimeEnd;
                    delete values.endTimeStart;
                    delete values.startTimeEnd;
                    delete values.startTimeStart;
                    item.dispatch(item.actionType,{...values,Prompt:parent.Prompt,onClose:this.props.onClose,reload:parent.handleEvent.reload});
                  }else if(item.actionType=="DUTY_DATALIST_ADD"&&GetType(that)==="undefined"){
                    values.deptId = parent.ownState.res_LOGIN["data"]["deptId"];
                    values.deptName = parent.ownState.res_LOGIN["data"]["departmentNameList"];
                    item.dispatch(item.actionType,{...values,Prompt:parent.Prompt,onClose:params.cancel,reload:parent.handleEvent.reload});
                  }
                })
              }
            });
        },
        //对应antd 中的 form的配置项   [ 可选 ]
        formOptions:{ 
          hideRequiredMark:false,
          layout:"vertical",
          style:{
            width:"1400px",
            background:"#fff",
            paddingTop:"30px",
            height:"100%",
            paddingRight:"40px",
            paddingLeft:"40px",
            borderRight:"1px solid #d8ecfc",
            borderLeft:"1px solid #d8ecfc"
          }
        },
        //对应antd 中的 栅格配置   [ 可选 ]
        searchLayout:{
          xl:8,lg:12,md:24,sm:24,xs:24,xxl:6
        },
        //筛选表单项 label 和表单的布局 label wrapper   [ 可选 ]
        layout:{ 
          //对应antd 中的配置
          labelCol: {
              xs: {span: 10},
              sm: {span: 4},
              md: {span: 2},
              lg: {span: 4},
              xl: {span: 2},
              xxl: {span:4}
            },
            wrapperCol: {
              xs: {span: 14},
              sm: {span: 20},
              md: {span: 22},
              lg: {span: 20},
              xl: {span: 22},
              xxl: {span: 20}
            },
        },
        operation:{   //[ 必填  ]  
          layout:"center" ,//提交按钮组 布局
          buttonGroup:[{type:"submit",text:"提交"},{type:"reset",text:"重置"}]  //提交按钮项
        }
      }
  }
  if(GetType(that)==="undefined"){
    result.searchPanel.search.forEach((item,index)=>{
       if( item.antdOptions&& item.tag!=="InputColor"&&item.tag!=="uploadImage"){delete item.antdOptions.initialValue};
       if(index!==0&&item.antdOptions){item.antdOptions.initialValue = null};
    })
  }
  return result
}





