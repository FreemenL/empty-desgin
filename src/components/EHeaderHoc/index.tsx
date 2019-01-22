import React,{ Component } from 'react';
import {  withRouter} from 'react-router-dom';
import { Layout, Menu , Icon ,Avatar ,Dropdown ,Button  } from 'antd';


import EText from '../EText';
import styles from './index.less';
import EMenu from '../EMenu';
import freetool from 'freetool';
import { transformMemuList } from '../utils/tool';


const { cookieUtil } = freetool;
const { SubMenu } = Menu;
const { Header } = Layout;


const EmptyPageHeader = styles["empty-page-header"];
const EmptyPageHeaderLogo = styles["empty-page-header-logo"];
const EmptyPageHeaderTitle = styles["empty-page-header-title"];
const EmptyPageHeaderMenu = styles["empty-page-header-menu"];
const EmptyAvatarMenu = styles["empty-page-header-avatar-menu"];
const EmptyAvatar = styles["empty-page-header-avatar"];
const EmptydTitleText  = styles["empty-page-header-title-text"]


interface headerConfig{
	LogoSrc:string,//logo图片地址
	name:string,//系统名称
	menuList:Array<any> ,//菜单数组
	userMsg:any, //  用户信息
	getMenu:Function
}


function EheaderHoc(headerConfig:headerConfig){
	@(withRouter as any)
	class Eheader extends Component<any>{
	myRef
	constructor(props){
		super(props);
		this.myRef = React.createRef();
	}
	state={
		menuTop:0
	}
	componentDidMount() {
	  this.setState((prevState,props)=>{
		  return{
			menuTop:this.myRef.current.offsetHeight
		  }
	  })
	}
	render(){
			transformMemuList.func(headerConfig.menuList);
			return(
			    <Header className={ EmptyPageHeader } style={{justifyContent:"space-between"}}>
			     <div className={ EmptyPageHeader }>
			     	<span className={ EmptyPageHeaderTitle }>
						<img  src={ headerConfig.LogoSrc} alt="logo" width={62} height={50} className={EmptyPageHeaderLogo}/>
						<div className={ EmptydTitleText }>{headerConfig.name||"empty"}</div>
					</span>
			      	<ul className={EmptyPageHeaderMenu}>
			      		{ headerConfig.menuList.map((menu,index)=>{
			      			return(<EMenu.component to={transformMemuList.resData[index]} key={transformMemuList.resData[index]}>{menu.title}</EMenu.component>)
			      		})}
			      	</ul>
			     </div>
			     <div>
					<div  className={EmptyAvatar} ref={this.myRef}>
						<Avatar src={headerConfig.userMsg.pic} size="large"/>
						<span>{headerConfig.userMsg.name}</span>
						<div className={EmptyAvatarMenu} style={{top:this.state.menuTop}}>{headerConfig.getMenu()}</div>	
					</div>
			     </div>
			     
			    </Header>
			)
		}
	}
	return Eheader;
}

export default{
	name:"EheaderHoc",
	component:EheaderHoc
}

