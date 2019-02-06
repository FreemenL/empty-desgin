/**
 * [EForm 表单组件] 
 * @Author   freemenL
 * @DateTime 2018-10-27T17:58:03+0800
*/
import React from 'react'; 
import { 
  Col, 
  Row, 
  Button,
  Form, 
  Select,
  Checkbox, 
  Input, 
  DatePicker,
  Tooltip,  
} from 'antd';
import EuploadImg from "../EuploadImg";
import { SearchLayout } from '../Layout/layout';
import styles from './index.less';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const { FourLayout ,searchLayout } = SearchLayout;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

/**
 * [EForm 渲染表单项]
 * @Author   freemenL
 * @DateTime 2018-10-27T21:15:34+0800
 */
const handleBtnStyle =  styles["empty-btn-handle"];
function EForm(this:any){
	const { search ,operation:{buttonGroup,layout},formOptions ,animation } = this.props.searchPanel;
	const { form } = this.props;
	const {getFieldDecorator} = form;
  const itemLayout = this.props.searchPanel.layout||FourLayout;
	const labelLayout = this.props.searchPanel.searchLayout||searchLayout;
  const handleBtn = renderButton.apply(this);

	return(
		<Form onSubmit={this.handleSearch} {...formOptions}>
      <Row gutter={24}>
       {search.map((item,index)=>{
       		const {type,...other} = item;
       		const otherParams = {...other,itemLayout,getFieldDecorator,labelLayout};
       		return new renderElement(otherParams)[type](`animated ${animation|| "slideInDown"}`)
       })}
       </Row>
       <Row type="flex" style={{justifyContent:layout}} className={handleBtnStyle}>
         {buttonGroup.map((params,index)=>{
          return handleBtn(params)
         })}
       </Row>
    </Form>
	)
}


/**
 * [renderButton description]
 * @Author   freemenL
 * @DateTime 2018-10-27T21:16:18+0800
 * @param    {[type]}                 this:any [description]
 * @return   {[type]}                          [description]
 */
const emptyBtnGroup = styles["empty-btn-group"];
function renderButton(this:any){
  const that = this;
  return function(params){
      const btntype = {
        reset:"default",
        submit:"primary",
        clear:"danger"
      }
      const eventHandle = {
         reset:that.handleReset,
      }
      return(
        <Button 
          key={params.type}
          className={emptyBtnGroup}
          type={btntype[params.type]} 
          onClick={eventHandle[params.type]&&eventHandle[params.type]}
          htmlType={params.type=="submit"?"submit":"button"}
        >{params.text}</Button>
      )
  }
}


/**
 * 解析配置类
 */
const sarchItemLayout = styles["empty-search-layout-item"];
const searchCheckBox = styles["empty-search-check-box"];
class renderElement{
  readonly field :string;
  readonly type :string;
  readonly label :string;
  readonly textAreaConfig:any
  readonly inputConfig :any;
  readonly checkboxGroupConfig:any
  readonly itemLayout :any;
  readonly labelLayout :any;
  readonly antdOptions ?:any;
  readonly antdFormItemOptions ?:any;
  readonly getFieldDecorator:any;
  readonly DatePickerConfig:any
  readonly renderCustom:any;
  readonly CustomConfig:any;
  readonly uploadImgConfig:any;
  constructor(
      public renderItem: {
      		field:string;
      		type:string;
      		label:string;
      		inputConfig:any;
          checkboxGroupConfig:any
      		getFieldDecorator(id: string, options?: any): (node: React.ReactNode) => React.ReactNode;
      		itemLayout:any;
      		labelLayout:any;
          antdOptions?:any;
      		antdFormItemOptions?:any;
          textAreaConfig:any;
          DatePickerConfig:any; //对应antd datepicker 配置
          renderCustom:any;
          CustomConfig:any;
          uploadImgConfig:any;
      	}
    ){
      this.field = renderItem.field;
      this.type = renderItem.type;
      this.label = renderItem.label;
      this.inputConfig = renderItem.inputConfig;
      this.checkboxGroupConfig = renderItem.checkboxGroupConfig;
      this.textAreaConfig = renderItem.textAreaConfig;
      this.itemLayout = renderItem.itemLayout;
      this.labelLayout = renderItem.labelLayout;
      this.getFieldDecorator = renderItem.getFieldDecorator;
      this.antdOptions = renderItem.antdOptions||{};
      this.antdFormItemOptions = renderItem.antdFormItemOptions||{};
      this.DatePickerConfig = renderItem.DatePickerConfig;
      this.renderCustom = renderItem.renderCustom;
      this.CustomConfig = renderItem.CustomConfig;
      this.uploadImgConfig = renderItem.uploadImgConfig
  }

  Input=(classname)=>{
      return(
        <Col {...this.labelLayout} key={this.field} className={`${sarchItemLayout} ${classname}`}>
          <FormItem label={this.label} {...this.antdFormItemOptions} {...this.itemLayout} >
            <Tooltip
                trigger={'hover'}
                title={this.antdOptions.initialValue&&this.antdOptions.initialValue}
                placement="topLeft"
              >
              {this.getFieldDecorator(this.field,this.antdOptions)(
                <Input {...this.inputConfig}/>
              )}
            </Tooltip>
          </FormItem>
        </Col>
      )
  }

  TextArea =(classname)=>{
      return(
        <Col {...this.labelLayout} key={this.field} className={`${sarchItemLayout} ${searchCheckBox}  ${classname}`}>
          <FormItem label={this.label} {...this.antdFormItemOptions} {...this.itemLayout} >
            {this.getFieldDecorator(this.field,this.antdOptions)(
              <TextArea {...this.textAreaConfig}/>
            )}
          </FormItem>
        </Col>
      )
  }
  CheckboxGroup = (classname)=>{
      return(
        <Col {...this.labelLayout} key={this.field} className={`${sarchItemLayout} ${searchCheckBox}  ${classname}`}>
          <FormItem label={this.label} {...this.antdFormItemOptions} {...this.itemLayout} >
            {this.getFieldDecorator(this.field,this.antdOptions)(
              <CheckboxGroup {...this.checkboxGroupConfig}/>
            )}
          </FormItem>
        </Col>
      )
  }

  uploadImage =(classname)=>{
    return(
      <Col {...this.labelLayout} key={this.field} className={`${sarchItemLayout} ${searchCheckBox}  ${classname}`}>
          <FormItem label={this.label} {...this.antdFormItemOptions} {...this.itemLayout} >
            {this.getFieldDecorator(this.field,this.antdOptions)(
              <EuploadImg.component {...this.uploadImgConfig}/>
            )}
          </FormItem>
      </Col>
    )
  }

  DatePicker = (classname)=>{
     return(
        <Col {...this.labelLayout} key={this.field} className={`${sarchItemLayout}  ${classname}`}>
          <FormItem label={this.label} {...this.antdFormItemOptions} {...this.itemLayout} >
            {this.getFieldDecorator(this.field,this.antdOptions)(
              <DatePicker {...this.DatePickerConfig} style={{ width: '100%' }}/>
            )}
          </FormItem>
        </Col>
      )
  }
  Custom = (classname)=>{
    return(
      <Col {...this.labelLayout} style={{zIndex:99999}} key={this.field} className={`${sarchItemLayout}  ${classname}`}>
        <FormItem label={this.label} {...this.antdFormItemOptions} {...this.itemLayout} >
          {this.getFieldDecorator(this.field,this.antdOptions)(
            <this.renderCustom style={{width:"100%"}} {...this.CustomConfig}/>
          )}
        </FormItem>
      </Col>
    )
  }
}

export default{
	name:"EForm",
	component:EForm
}

