import React,{ Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { enquireScreen } from 'enquire-js';
import { Link , withRouter } from 'react-router-dom';
import styles from './index.less';
import classNames from 'classnames';

const { SubMenu } = Menu;
const { Sider } = Layout;

interface Props{
	width:number,
	style:any,
	menuList:Array<any>,
	[propName: string]: any,
}

@(withRouter as any)
class ESiderMenu extends Component<Props,any>{

	static defaultProps={
		width:280,
		style:{ background:"#fff" } 
	}

	constructor(props){
		super(props)
		let rootSubmenuKeys:Array<any> = [];
		if(this.props.menuList&&this.props.menuList.length>0){
			rootSubmenuKeys = this.props.menuList.map((item,index)=>{
				return item.pathname;
			})
		}
		this.state = {
	    	openKeys: [rootSubmenuKeys[0]]||[],
	    	collapsed:false,
	    	rootSubmenuKeys,
	    	defaultSelectedKeys:[this.props.location.pathname]
		}
		this.onOpenChange = this.onOpenChange.bind(this);
		this.changeSider = this.changeSider.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}

	componentDidMount() {
		enquireScreen(mobile => {
			this.setState((prevState,props)=>{
				return{
					collapsed:mobile
				}
			})
		},'only screen and (max-width: 1000px)');
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if(!_.isEqual(prevProps.menuList,this.props.menuList)){
			if(this.props.menuList&&this.props.menuList.length>0){
				const rootSubmenuKeys = this.props.menuList.map((item,index)=>{
					return item.pathname;
				})
				this.setState((prevState,props)=>{
					return { 
						rootSubmenuKeys,
						openKeys: [rootSubmenuKeys[0]]||[],
						defaultSelectedKeys:[this.props.location.pathname]
					};
				})
			}
		}
		
	}

	handleClick(e){
	    this.setState((prevState,props)=>{
	    	return{
	    		defaultSelectedKeys:[e.key]
	    	}
	    });
	}

	onOpenChange(openKeys){
	    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
	    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	      this.setState({ openKeys });
	    } else {
	      this.setState({
	        openKeys: latestOpenKey ? [latestOpenKey] : [],
	      });
	    }
	}

	changeSider(){
		this.setState((prevState,props)=>{
			return{
				collapsed:!prevState.collapsed
			}
		})
	}

	getMenu(menuList){
		return menuList.map((item,index)=>{
			return (item.sub&&item.sub.length>0)?this.renderSubMenu(item):this.renderMenu(item)
		})
	}

	renderMenu(menu){
		return (
			<Menu.Item key={menu.pathname}>
				<Link to={menu.pathname}>
					<Icon type={menu.icon||"global"} />
					<span style={{color:!this.state.collapsed?"inline":"none"}}> {menu.title}</span>
				</Link>
			</Menu.Item>
		)
	}

	renderSubMenu(menu){
		return (
			<SubMenu key={menu.pathname} title={<span><Icon type={menu.icon} /><span>{ menu.title }</span></span>}>
	          {(menu.sub&&menu.sub.length>0)&&menu.sub.map((item,index)=>{
	          	return (item.sub&&item.sub.length>0)?this.renderSubMenu(item.sub):this.renderMenu(item);
	          })}
	        </SubMenu>
		)
	}

	render(){
		const emptySiderTrigger = classNames(`${styles["empty-sider-trigger"]}`,{
			[`${styles["empty-sider-trigger-vertical"]}`]:!this.state.collapsed,
			[`${styles["empty-sider-trigger-across"]}`]:this.state.collapsed,
	    });
	    const {
			history,
			location,
			match,
			menuList,
			staticContext,
			...rest
		}= this.props;
		return(
			<Sider 
			    collapsed = {this.state.collapsed}
			    trigger = {null}
          		collapsible 
          		{...rest}
			>
				<div className={ emptySiderTrigger } onClick={ this.changeSider }><span></span></div>
				<Menu
				  mode="inline"
				  defaultSelectedKeys={this.state.defaultSelectedKeys}
				  defaultOpenKeys={['sub1']}
				  selectedKeys={this.state.defaultSelectedKeys}
				  openKeys={this.state.openKeys}
				  onOpenChange={this.onOpenChange}
				  onClick={this.handleClick}
				  style={{borderRight: 0 }}
				>
					{this.getMenu(this.props.menuList)}
				</Menu>
			</Sider>
		)
	}
}
export default{
  name:"ESiderMenu",
  component:ESiderMenu
}

