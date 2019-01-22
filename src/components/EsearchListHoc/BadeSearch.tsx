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
  child
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
    this.onRef = this.onRef.bind(this);
  }
  componentDidMount(){
    this.setState((prevState,props)=>{
      return{
        loading:false
      }
    })
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
      this.setState((prevState,props)=>{
        return{
          loading:false
        }
      })
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
    this.child.handleReset();
    this.setState((prevState,props)=>{
      return{
        loading:true
      }
    })
    event.persist();
    this.getListData();
    this.EProxy(event);
  }

  getListData(values?:any){
    const { renderChildType ,callback } = this.props;
    callback[renderChildType]?
    callback[renderChildType](values):
    this.getTableData(values);
  }

  getTableData(values){
    let getDatatimes = 0;
    const { ownAction , ApiConfig:{ listEffectParams } } = this.props;
    this.props.ownAction.forEach((item,index)=>{
      if(item["actionType"].endsWith("DATALIST") && getDatatimes<=1){
        getDatatimes++;
        let effectQurey = {};
        const effectParams = listEffectParams(this.props.ownState,this.state);
        if(GetType(effectParams)==="undefined"){
          throw TypeError("listEffectParams must be return false or object  in EsearchHoc pageConfig ");
        }
        if(effectParams!==false&&GetType(effectParams)==="object"){
          effectQurey = effectParams;
        }
        if(!_.isEmpty(values)){
          item["dispatch"](item["actionType"],{...effectQurey,...values})
        }else{
          item["dispatch"](item["actionType"],{...effectQurey})
        }
      }
    })
  }
   
  onRef(ref){
    this.child = ref;
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
              const Menus=menu.bind(this)
              return <Menus key={`Menus${Math.random()}`}/>
            })}
            {renderChildType.trim()==""?<span 
                data-icon="menuList"
                className={ listPanelMenuListClass }
                onClick={this.iconClick}
            />:null}
          </section>
        </div>
        {this.props.render(this.state,{
          onRef:this.onRef,
          getListData:this.getListData,
          reload:this.getListData.bind(this)
        })}
      </Spin>
    );
  }
}
export default BadeSearch;