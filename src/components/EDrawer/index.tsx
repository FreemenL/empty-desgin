import React from 'react';
import classNames from 'classnames';
import { Drawer,Icon ,Tag} from 'antd';

import styles from './index.less'

const hideBtn = styles["empty-hide-btn"];
const drawerTitle = styles["empty-drawer-title"];

interface Props{title:string,visible:boolean,onClose:any,closable:boolean,placement?:any,params?:any;children?:any};

class EDrawer extends React.Component<any,any>{
	constructor(props){
		super(props)
	}
	shouldComponentUpdate(nextProps,nextState){
	  if(!_.isEqual(this.props.params,nextProps.params)||
	  	  this.props.title!==nextProps.title||
	  	  this.props.visible!==nextProps.visible
	  	){
		return true;
	   }
	   return false
	}

	render(){
	    const { title,visible,onClose,closable,placement,params,children } = this.props;
			const EDrawerClassNames = classNames({
			[`${styles[`empty-drawer-${placement?placement:"left"}`]}`]:placement?placement:"left"
		})
		const arrowIcon = {top:"up",bottom:"down",left:"left",right:"right"};
		
	return(
		<Drawer
	        title={<Tag color="#87d068" >{title}</Tag>}
	        placement={ placement }
	        closable={ closable }
	        onClose={ onClose }
	        visible={ visible }
	        className={ EDrawerClassNames }
	        destroyOnClose
	       >
	      <Icon type={arrowIcon[placement]} className={hideBtn} onClick={onClose}/>
	        {React.Children.map(children,(children:any)=>{
				return React.cloneElement(children,{
					params,
					onClose
				})
			})}
        </Drawer>
	)
	}
}
export default{
	name:"EDrawer",
	component:EDrawer
}
