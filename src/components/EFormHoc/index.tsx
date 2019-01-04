import React,{Component}from 'react';
import { Form } from 'antd';
import { emptyFormConfig } from '../constant';

import freetool from 'freetool';
import EwapperHoc from '../EwapperHoc';
import EformIndex from '../Eform/index';

import autobind from 'autobind-decorator';
const { mergeConfig } = freetool;
const {component:Eform} = EformIndex;


function EFormHoc(this:any,EformConfig,pattern){
	const that = this;
	let defaultProps = mergeConfig(emptyFormConfig.call(this),(EformConfig&&pattern=="edit")?EformConfig.call(this):(EformConfig&&EformConfig(pattern)));
	@autobind
	class  EFormWrapper extends Component<any>{
		Eform
		Ewapper
		static displayName="EFormHoc(EFormWrapper)"
		static defaultProps = defaultProps
		constructor(props){
			super(props)
			this.Eform = Eform.bind(this);
			this.Ewapper = EwapperHoc.component({Rowlayout:this.props.Rowlayout})
		}
		getElement(){
		    const SearchItem = this.Eform
		    return this.props.searchPanel?(<SearchItem/>):null;
		}
		handleSearch(e){
		   if(!this.props.searchPanel.submit){throw ReferenceError("EFormHoc params must be have submit props！")}
		   this.props.searchPanel.submit.call(this,e,that.props);
		}
		handleReset(){
		   this.props.form.resetFields();
		}
		render(){		
	        return(
        		<this.Ewapper>
        		   {this.getElement()}
        		</this.Ewapper>
	        )
		}
	}
	return Form.create()(EFormWrapper)
}

export default{
	name:"EFormHoc",
	component:EFormHoc
}
































