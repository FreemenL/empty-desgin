import React,{ Component } from "react";
import autobind from 'autobind-decorator';
import freetool from 'freetool';
import TableTemplate from "./TableTemplate";
import CardTemplate from "./CardTemplate";
import EDrawer from '../Edrawer';
import EModalHoc from '../EModalHoc';

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
		display:'none'
	};

	componentDidMount(){
		this.props.handleEvent.getChild("bindObj",this);
	}

	shouldComponentUpdate(nextProps,nextState){
		if(this.state.display!==nextState.display){
			return true
		}
		if(this.state.visible!==nextState.visible||this.state.modalVisibale!==nextState.modalVisibale){
			return true
		}
		if( this.props.state.menuList!==nextProps.state.menuList||!_.isEqual(this.props.State,nextProps.State)){
			return true;
		}
		return false
	}

	handleTableChange(pagination, filters, sorter){
		let request={};
		Object.keys(this.props.State).forEach((item,index)=>{
			if(item == this.props.listActionName){
				request = this.props.State[item]["request"];
			}
		})
		const pager:any = { ...request };
    	pager.page = pagination.current;
		pager.pageSize = pagination.pageSize;
		this.props.Actions[this.props.Actions[`${this.props.listActionName}_action`]](this.props.listActionName+"_REQUEST",{...pager});
	}

	handleClose(){
		this.setState((prevState,props)=>{
			return{
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

	handletest(){
		this.setState({display:"block"})
	}

	AddNode = GetType(this.props.addConfig.content)=="function"?this.props.addConfig.content.call(this,this.state.params):()=>this.props.addConfig.content
	ShowNode = GetType(this.props.detailCofig.content)=="function"?this.props.detailCofig.content():()=>this.props.detailCofig.content
	EditNode = GetType(this.props.editConfig.content)=="function"?this.props.editConfig.content.call(this,this.state.params):()=>this.props.editConfig.content
	renderContext = {
		show:GetType(this.ShowNode)=="undefined"?null:<this.ShowNode/>,
		edit:GetType(this.EditNode)=="undefined"?null:<this.EditNode/>,
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

		const modalConfig = {
			visible: this.state.modalVisibale,
			handleCancel:this.handleCancel,
			title:"添加",
			width:"80%",
			footer:null,
			...this.props.addConfig.modal
		}
		return(
		  <div>
		  	<ElementNode/>
		  	<EDrawer.component {...EDprops}>
		  		{this.renderContext[this.state.handle]}
		  	</EDrawer.component>
		  	<Modal {...modalConfig}>
		  		<this.AddNode/>
		  	</Modal>
		  </div>
		)
	}
}

export default ListPanel;






























