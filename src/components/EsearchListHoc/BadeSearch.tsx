import  React,{ Component} from 'react';
import freetool from 'freetool';
import classNames from 'classnames';
import { Spin } from 'antd';
import autobind from 'autobind-decorator';

//less
import styles from './index.less';
//utils 
const { GetType, throttle} = freetool;

interface Props{
  render:Function,
  [propName: string]: any
}

//classname
const listPanelClass = styles['empty-search-panel']; //筛选项面板
const listPanelTitleClass = styles['empty-search-panel-title']; //筛选项标题
const listPanelMenuClass = styles['empty-search-panel-menu-operation'];//筛选项菜单容器
const listPanelMenuBaseClass = styles['empty-search-panel-menu-operation-base'];//菜单图标基本样式

class BadeSearch extends Component<Props,any>{
  EProxy
  getChild
  ref
  constructor(props) {
    super(props);
    this.state={
      menuList:this.props.searchPanel.type==="table"?true:false,//菜单样式
      searchState:true,
      loading:true,
      pagination:this.props.listConfig.pagination
    }
    this.EProxy = throttle(this.EventProxy.bind(this),700);
    this.EventProxy = this.EventProxy.bind(this);
    this.getListData = this.getListData.bind(this);
    this.getChild = this.getChild.bind(this);
  }
  componentDidMount(){
    this.setState((prevState,props)=>{
      return{
        loading:false
      }
    })
  }

  getChild(type,ref){
    const _this = this;
    const proxy = {
      bindObj(){
        _this.ref = ref;
      },
      execute(){
       _this.ref[ref]();
      }
    }
    proxy[type]();
  }
  /**
    * [iconClick description]
    * 图标点击事件处理函数  
  */
  EventProxy(event){
    const eventTarget = event.target.dataset["icon"];
    const { method :{ menuClickHook ,searchClickHook}} = this.props;
    const eventHandle = { menuList:menuClickHook,searchState:searchClickHook }
    if(GetType(eventHandle[eventTarget])==="function"&&!eventHandle[eventTarget]()){
      return false;
    }
    this.setState((prevState,props)=>{
      return{
        [eventTarget]:!prevState[eventTarget],
        loading:false
      }
    })
  }

  @autobind
  iconClick(event){
    this.setState((prevState,props)=>{
      return{
        loading:true
      }
    })
    event.persist();
    this.getListData();
    this.EProxy(event);
  }

  async getListData(params?:any){
    if(this.props.method.componentDidMount ){
      return this.props.method.componentDidMount(params,this.props,this.state);
    }
    if(this.props.renderChildType){
      this.props.callback[this.props.renderChildType](params);
    }
  }
  
  render() {
    const listPanelMenuListClass = classNames(`${listPanelMenuBaseClass}`,{//筛选展示模式菜单图标
      [`${styles['empty-search-panel-menu-operation-list']} `]:this.state.menuList,
      [`${styles['empty-search-panel-menu-operation-card']} `]:!this.state.menuList,
    });
    const listPanelMenuSearchClass = classNames(`${listPanelMenuBaseClass}`,{//查询状态菜单图标
      [`${styles['empty-search-panel-menu-operation-search-hide']} `]:this.state.searchState,
      [`${styles['empty-search-panel-menu-operation-search-show']} `]:!this.state.searchState,
    });
    const menuLength = this.props.headMenu&&this.props.headMenu.length;
    const { renderChildType } = this.props;
    return (
      <Spin spinning={this.state.loading} size="large">
        <div className={listPanelClass}>
          <div className={listPanelTitleClass}>
            {this.props.header}
          </div>
          <section className={listPanelMenuClass} style={{gridTemplateColumns: `repeat(${2+menuLength},30px)` }}>
            <span 
              data-icon="searchState"
              className={listPanelMenuSearchClass}
              onClick={this.EventProxy}
            />
            {this.props.headMenu&&this.props.headMenu.map((menu,index)=>{
              const Menus = menu.bind(this,this.getChild);
              return <Menus key={Math.random()}/>
            })}
             {renderChildType.trim()==""?<span 
                data-icon="menuList"
                className={ listPanelMenuListClass }
                onClick={this.iconClick}
            />:null}
          </section>
        </div>
        {this.props.render(this.state,{
          getChild:this.getChild,
          getListData:this.getListData,
          reload:this.getListData.bind(this)
        })}
      </Spin>
    );
  }
}
export default BadeSearch;


