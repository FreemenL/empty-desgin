import React,{ Fragment ,Component  } from 'react';
import { Button } from 'antd';
import { EsearchListHoc, ElistHoc ,EformHoc ,Edocument, Edrawer ,Prompt} from 'emptyd';

import connectAid, { Actions } from '@store/connect';
import { config } from '@config/index';
import { emptyFormConfig } from "./post";
import styles from './index.less';

const { DATALIST ,DUTY_DATALIST_DELETE , DUTY_DATALIST_UPDATE , DUTY_DATALIST_ADD ,LOGIN } = Actions;

const EsearchListHocDome =  connectAid(
	  [ LOGIN,DATALIST,DUTY_DATALIST_DELETE ,DUTY_DATALIST_UPDATE,DUTY_DATALIST_ADD ]
  )(EsearchListHoc({
		header:"数据展示",
		Prompt,
		headMenu:[
			function(this:any,callback){
			   return(
			   	<span className={`${styles['head-menu-add']}`} onClick={()=>this.props.method.handleListAdd(callback)}>
			   	</span>
			   )
			},
		],
		listActionName:DATALIST,
		method:{
			/* params 查询的参数   props log查看 */
			componentDidMount(params={},props,currentState){
				const effectParams = {
					deptId : config.userMsg["deptId"],
					dutyType:2,
					page:1,
					pageSize:10
				}
			  props.Actions[Actions['DATALIST_action']](DATALIST+"_REQUEST",{...effectParams,...params});
			},

			handleListAdd(callback){
				callback("execute","handleListAdd");
			},
       		// [ 可选 ] 菜单图标点击钩子 返回false 屏蔽切换展示功能
			menuClickHook(this:any){			  
	          return true
	    },
			// [ 可选 ] 查询图标点击钩子 返回false 屏蔽查询功能
			searchClickHook(){
				// Prompt["warning"]("无需查询")
				return true
			},
			deleteList(this:any,RowData){
					this.props.modal.confirm({
						title: '确定删除当前数据？',
						okText: '确认',
						okType: 'danger',
						cancelText: '取消',
						onOk:()=>{
							return new Promise((resolve, reject) => {
									const Actios = this.props.ownAction;
											if(Actios.length>0){
												Actios.forEach(async (actions,index)=>{
													if(actions.actionType == DUTY_DATALIST_DELETE ){
																const { actionType, dispatch } = actions;
														const res = await dispatch(actionType,[RowData.id]);
														if(res){
															this.props.handleEvent.reload();
															resolve(this.props.Prompt["success"]("删除成功！"))
														}else{
															reject()
														}
													}
												})
											}
							}).catch((error) => { throw Error(error) });
						}
					})
				}
	    },
	    searchPanel:{
	      type:"table",//表单展示类型  table|card
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
						 rules: [{
								required: true,
								message: '请输入班次名称',
							}]
						}
					}],
	      //对应antd 中的 form的配置项   [ 可选 ]
	      formOptions:{ 
	        hideRequiredMark:true
	      },
	      //对应antd 中的 栅格配置   [ 可选 ]
	      searchLayout:{
	       xl:8,lg:12,md:12,sm:24,xs:24
	      },
	      //筛选表单项 label 和表单的布局 label wrapper   [ 可选 ]
	      layout:{ 
	        //对应antd 中的配置
	        labelCol: {
	          xs: {span: 10},
	          sm: {span: 6},
	          md: {span: 8},
	          lg: {span: 6},
	          xl: {span: 5},
	          xxl: {span: 5}
	        },
	        //对应antd 中的配置
	        wrapperCol: {
	          xs: {span: 14},
	          sm: {span: 18},
	          md: {span: 14},
	          lg: {span: 18},
	          xl: {span: 19},
	          xxl: {span: 19}
	        },
	      },
	      operation:{   //[ 必填  ]  
	        layout:"left" ,//提交按钮组 布局
	        buttonGroup:[{type:"submit",text:"查询"},{type:"reset",text:"重置"}]  //提交按钮项
	      }
	    },
	    listConfig:{
	      // 对应antd的Table配置
	      tableConfig:{
	        rowKey:"id"
	      },
	      // 表格列map数据，对应antd的表格 columns
	      tableColumns:[{
		      title: ' 编号',
					dataIndex: 'id',
					width:100,
					align:'center'
		    	}, {
		      title: '颜色',
		      dataIndex: 'color',
		      align:"center",
		      render: function(item){
		        return(
		          <div style={{margin:" 0 auto",background: item,width: '10px',height: '10px',borderRadius:'50%'}}></div>
		        )
		      }
		    }, {
					title: '班次名称',
					align:"center",
		      dataIndex: 'name',
		    },{
					title: '所属部门',
					align:"center",
		      dataIndex: 'deptName',
		    }, {
					title: '班次类型',
					align:"center",
		      dataIndex: 'dutyType',
		      render: function(record){
		        return record == 1?'早班':'晚班'
		      }
		    }, {
					title: '上班时间',
					align:"center",
		      dataIndex: 'startTime',
		    }, {
					title: '下班时间',
					align:"center",
		      dataIndex: 'endTime',
		    },{
          title: '操作',
					align:"center",
					width:300,
          renderUseState: function(this:any,text, record, index){
            return(
              <Fragment>
                <Button  
                  style={{marginRight:"10px"}} 
                  type="primary" 
                  size="small" 
                  onClick={ this.props.method.showList.bind(this,record) }
                >详情</Button>
                <Button 
                  style={{marginRight:"10px"}}  
                  size="small"
                  onClick={this.props.method.editList.bind(this,record)}
                  >修改</Button>
                <Button  
                  style={{marginRight:"10px"}} 
                  type="danger" 
                  size="small"
                  onClick={this.props.method.deleteList.bind(this,record)}
                  >删除</Button>
              </Fragment>
            )
          },
        }],
        cardHandleBtn:[
	        {
	          type:"primary",
	          text:"详情"
	        },{
	          type:"",
	          text:"修改"
	        },{
	          type:"danger",
	          text:"删除",
	        }
	      ]
	    },
	    editConfig:{
	      content:function(this:any,params){
	      	this.params = params
	        return EformHoc.call(this,emptyFormConfig,"edit")
	      }
	    },
	    addConfig:{
	   	   content:function(this:any,params){
	        return EformHoc.call(this,emptyFormConfig,{cancel:this.handleCancel})
	      }
	    },
	    detailCofig:{
	        content:function(){
		      return ElistHoc({
						type:"default",
						data:{
							"班次名称":"name",
							"所属部门":"deptName",
							"班次类型":"dutyType",
							"上班时间":"startTime",
							"下班时间":"endTime",
							"上班打卡时间范围":"onRange",
							"下班打卡时间范围":"offRange",
							"午休时间":"duration"
						}})
		    }
	    }
	}));

const data = [{
  key: '1',
  title: 'header',
  explain: "页面标题",
  type:"string",
  default: '-',
},{
  key: '2',
  title: 'headMenu',
  explain: "头部菜单元素",
  type:"Array<ReactNode>",
  default: "[]",
},{
  key: '4',
  title: 'method',
  explain: "放置交互函数",
  type:"object",
  default: '{}',
},{
  key: '5',
  title: 'searchPanel',
  explain: "筛选项配置对象",
  type:"object",
  default: '{}',
},{
  key: '6',
  title: 'listConfig',
  explain: "列表配置对象",
  type:"object",
  default: '{}',
}];

class EdrawerDocuments extends Component<any, any> {

  constructor(props){

    super(props);
    this.handleClose = this.eDrawerController.bind(this,"visible",false);
		this.handleShow = this.eDrawerController.bind(this,"visible",true);
		
  }

  state={
    visible:false
  }

  eDrawerController(type,visible){
    this.setState((prevState,props)=>{
      return{
        [type]:visible
      }
    })
  }

	handleClose
  handleShow
  handleGroupClose
	handleGroupShow
	
  render() {

    const EDprops = {
			title:`表格查询页面`,
			visible:this.state.visible,
			onClose:this.handleClose,
      closable:true,
			placement:"right",
    }

    return (
        <Edocument
          title="表格查询页面 EsearchListHoc"
          components={[{
            component:(
              <section>
                <Button onClick={ this.handleShow }>页面配置化</Button>
                <Edrawer {...EDprops}>
									<EsearchListHocDome/>
                </Edrawer>  
              </section>
            ),
            titDescripttion:"像echarts 一样配置你的页面",
						code:`
						/************************* index.tsx *************************/
						import React,{ Fragment ,Component  } from 'react';
						import { EsearchListHoc, ElistHoc ,EformHoc, Edrawer} from 'emptyd';
						import { Button } from 'antd';
						import connectAid, { Actions } from '@store/connect';
						import { config } from '@config/index';
						import { emptyFormConfig } from "./post";
						import styles from './index.less';
						
						const { DATALIST ,DUTY_DATALIST_DELETE , DUTY_DATALIST_UPDATE , DUTY_DATALIST_ADD ,LOGIN } = Actions;
						
						const EsearchListHocDome =  connectAid(
								[ LOGIN,DATALIST,DUTY_DATALIST_DELETE ,DUTY_DATALIST_UPDATE,DUTY_DATALIST_ADD ]
								)(EsearchListHoc({
								header:"数据展示",
								headMenu:[
									function(this:any,callback){
										 return(
											 <span className={styles['head-menu-add']} onClick={()=>this.props.method.handleListAdd(callback)}>
											 </span>
										 )
									},
								],
								listActionName:DATALIST,
								method:{
									/* params 查询的参数   props log查看 */
									componentDidMount(params={},props,currentState){
										const effectParams = {
											deptId : config.userMsg["deptId"],
											dutyType:2,
											page:1,
											pageSize:10
										}
										props.Actions[Actions['DATALIST_action']](DATALIST+"_REQUEST",{...effectParams,...params});
									},
						
									handleListAdd(callback){
										callback("execute","handleListAdd");
									},
											 // [ 可选 ] 菜单图标点击钩子 返回false 屏蔽切换展示功能
									menuClickHook(this:any){			  
												return true
									},
									// [ 可选 ] 查询图标点击钩子 返回false 屏蔽查询功能
									searchClickHook(){
										// Prompt["warning"]("无需查询")
										return true
									},
									deleteList(this:any,RowData){
										this.props.modal.confirm({
											title: '确定删除当前数据？',
											okText: '确认',
											okType: 'danger',
											cancelText: '取消',
											onOk:()=>{
												return new Promise((resolve, reject) => {
													const Actios = this.props.ownAction;
														if(Actios.length>0){
															Actios.forEach(async (actions,index)=>{
																if(actions.actionType == DUTY_DATALIST_DELETE ){
																	const { actionType, dispatch } = actions;
																	const res = await dispatch(actionType,[RowData.id]);
																	if(res){
																		this.props.handleEvent.reload();
																		resolve(this.props.Prompt["success"]("删除成功！"))
																	}else{
																		reject()
																	}
																}
															})
														}
												}).
												catch((error) => { throw Error(error) });
											}
										})
									}
									},
									searchPanel:{
										type:"table",//表单展示类型  table|card
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
												 rules: [{
														required: true,
														message: '请输入班次名称',
													}]
												}
											}],
										//对应antd 中的 form的配置项   [ 可选 ]
										formOptions:{ 
											hideRequiredMark:true
										},
										//对应antd 中的 栅格配置   [ 可选 ]
										searchLayout:{
										 xl:8,lg:12,md:12,sm:24,xs:24
										},
										//筛选表单项 label 和表单的布局 label wrapper   [ 可选 ]
										layout:{ 
											//对应antd 中的配置
											labelCol: {
												xs: {span: 10},
												sm: {span: 6},
												md: {span: 8},
												lg: {span: 6},
												xl: {span: 5},
												xxl: {span: 5}
											},
											//对应antd 中的配置
											wrapperCol: {
												xs: {span: 14},
												sm: {span: 18},
												md: {span: 14},
												lg: {span: 18},
												xl: {span: 19},
												xxl: {span: 19}
											},
										},
										operation:{   //[ 必填  ]  
											layout:"left" ,//提交按钮组 布局
											buttonGroup:[{type:"submit",text:"查询"},{type:"reset",text:"重置"}]  //提交按钮项
										}
									},
									listConfig:{
										// 对应antd的Table配置
										tableConfig:{
											rowKey:"id"
										},
										// 表格列map数据，对应antd的表格 columns
										tableColumns:[{
											title: ' 编号',
											dataIndex: 'id',
											width:100,
											align:'center'
											}, {
											title: '颜色',
											dataIndex: 'color',
											align:"center",
											render: function(item){
												return(
													<div style={{margin:" 0 auto",background: item,width: '10px',height: '10px',borderRadius:'50%'}}></div>
												)
											}
										}, {
											title: '班次名称',
											align:"center",
											dataIndex: 'name',
										},{
											title: '所属部门',
											align:"center",
											dataIndex: 'deptName',
										}, {
											title: '班次类型',
											align:"center",
											dataIndex: 'dutyType',
											render: function(record){
												return record == 1?'内勤班次':'外勤班次'
											}
										}, {
											title: '上班时间',
											align:"center",
											dataIndex: 'startTime',
										}, {
											title: '下班时间',
											align:"center",
											dataIndex: 'endTime',
										},{
											title: '操作',
											align:"center",
											width:300,
											renderUseState: function(this:any,text, record, index){
												return(
													<Fragment>
														<Button  
															style={{marginRight:"10px"}} 
															type="primary" 
															size="small" 
															onClick={ this.props.method.showList.bind(this,record) }
														>详情</Button>
														<Button 
															style={{marginRight:"10px"}}  
															size="small"
															onClick={this.props.method.editList.bind(this,record)}
															>修改</Button>
														<Button  
															style={{marginRight:"10px"}} 
															type="danger" 
															size="small"
															onClick={this.props.method.deleteList.bind(this,record)}
															>删除</Button>
													</Fragment>
												)
											},
										}],
										cardHandleBtn:[
											{
												type:"primary",
												text:"详情"
											},{
												type:"",
												text:"修改"
											},{
												type:"danger",
												text:"删除",
											}
										]
									},
									editConfig:{
										content:function(this:any,params){
											this.params = params
											return EformHoc.call(this,emptyFormConfig,"edit")
										}
									},
									addConfig:{
											content:function(this:any,params){
											return EformHoc.call(this,emptyFormConfig,{cancel:this.handleCancel})
										}
									},
									detailCofig:{
											content:function(){
											return ElistHoc({
												type:"default",
												data:{
													"班次名称":"name",
													"所属部门":"deptName",
													"班次类型":"dutyType",
													"上班时间":"startTime",
													"下班时间":"endTime",
													"上班打卡时间范围":"onRange",
													"下班打卡时间范围":"offRange",
													"午休时间":"duration"
												}})
										}
									}
							}));

						/************************* post.tsx *************************/
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
														values.onRange = <values.startTimeStart>-<{values.startTimeEnd}>;
														values.offRange = <{values.endTimeStart>-<values.endTimeEnd>
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
          ` 
          }]}
          docDescripttion="EsearchListHoc 实现了页面配置化，根据具体的业务场景配置页面，因配置参数较多，详情参照代码注释:"   
          documentData={data}        
        />
    );
  }
}

export default EdrawerDocuments;
