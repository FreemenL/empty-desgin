import React,{ Component } from "react";
import autobind from 'autobind-decorator';
import TableTemplate from "./TableTemplate";
import CardTemplate from "./CardTemplate";
import Edrawer from '../Edrawer/index';
import EModalHoc from '../EModalHoc';

import freetool from 'freetool';
const { GetType } = freetool;

interface Props{
	state:any,
	[propName: string]: any
}
@autobind
class ListPanel extends Component<Props,any>{
	constructor(props){
		super(props);
	}
	state = { 
		visible: false ,
		handle:"show",
		params:null,
		placement:"right",
		modalVisibale:false,
	};

	componentDidMount(){
	    const Ele:any = document.getElementById('editNode');
	}

	shouldComponentUpdate(nextProps,nextState){
		if(this.state.visible!==nextState.visible||this.state.modalVisibale!==nextState.modalVisibale){
			return true
		}
		if( this.props.state.menuList!==nextProps.state.menuList||!_.isEqual(this.props.ownState,nextProps.ownState)){
			return true;
		}
		return false
	}

	handleTableChange(pagination, filters, sorter){
		let request={};
		let getDatatimes=0;
		Object.keys(this.props.ownState).forEach((item,index)=>{
			if(item.endsWith("DATALIST")){
				request = this.props.ownState[item]["request"];
			}
		})
		const pager:any = { ...request };
    	pager.page = pagination.current;
    	pager.pageSize = pagination.pageSize;
		this.props.ownAction.forEach((item,index)=>{
	      if(item["actionType"].endsWith("DATALIST") && getDatatimes<=1){
			getDatatimes++;
        	item["dispatch"](item["actionType"],{...pager})
	      }
	    })
	}
	handleClose(){
		this.setState((prevState,props)=>{
			return {
				visible:false
			}
		})
	}
	
	handleListAdd(){
		this.setState((prevState,props)=>{
          return{
             modalVisibale:true
           }
       })
	}

	handleCancel(){
		
	    this.setState({
	      modalVisibale: false,
	    });
	 }
    render(){
		const ElementNode = this.props.state.menuList?TableTemplate.bind(this):CardTemplate.bind(this);
		const Modal = EModalHoc.component();
		const EDprops = {
			title:`${this.props.header}-${this.state.handle=="edit"?"编辑":"详情"}`,
			visible:this.state.visible,
			onClose:this.handleClose,
			closable:true,
			placement:this.state.placement,
			params:this.state.params,
			...this.props.detailCofig.drawerConfig
		}
		const ShowNode = GetType(this.props.detailCofig.content)=="function"?this.props.detailCofig.content():()=>this.props.detailCofig.content
		const EditNode = GetType(this.props.editConfig.content)=="function"?this.props.editConfig.content.call(this,this.state.params):()=>this.props.editConfig.content
		const AddNode = GetType(this.props.addConfig.content)=="function"?this.props.addConfig.content.call(this,this.state.params):()=>this.props.addConfig.content
		const renderContext = {
			show:GetType(ShowNode)=="undefined"?null:<ShowNode/>,
			edit:GetType(EditNode)=="undefined"?null:<EditNode/>,
		}
		const modalConfig = {
			visible: this.state.modalVisibale,
			handleCancel:this.handleCancel,
			title:"添加",
			width:1440,
			footer:null,
			...this.props.addConfig.modal
		}
		return(
		  <div>
		  	<ElementNode/>
		  	<Edrawer.component {...EDprops}>
		  		{renderContext[this.state.handle]}
		  	</Edrawer.component>
		  	<span id="listAdd" onClick={this.handleListAdd} style={{visibility:"hidden"}}></span>
		  	<Modal {...modalConfig}>
		  		<AddNode/>
		  	</Modal>
		  </div>
		)
	}
}

export default ListPanel;





































