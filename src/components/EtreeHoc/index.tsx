import React,{ Component } from 'react';
import { Row, Col, Tree ,Spin} from 'antd';
import styles from './index.less';
import EsearchListHoc from '../EsearchListHoc/index';
import Prompt from '../Prompt/index';
import Edrawer from '../Edrawer/index';

const { component:Esearch } = EsearchListHoc;
const { component:EPrompt } = Prompt;
const { TreeNode } = Tree;

const emptyTreeClass = styles["empty-tree"];
const emptyTreeContainer = styles["empty-tree-container"];
const emptyTreeNodeClass = styles["empty-tree-treeNode"];

type treeOption = {node:React.ReactNode,click:Function};

interface treeOptions{
  handlePanel:Array<treeOption>,
  getData:Function,
  minHeight:string,
  span:number,
  isSearch:boolean,
  header:string,
  search:Array<any>,
  showPage:Function,
  editPage:Function
}


function EtreeHoc(treeOptions:treeOptions){

  return class Etree extends Component{
    constructor(props){
      super(props);
      this.handleClose = this.handleClose.bind(this);
    }

    state={
      treeData:[],
      spinning:true,
      visible:false,
      placement:"right",
      params:null,
      showPattern:"show"
    }

    callback={
      treeNode:function(this:any,values){
        this.loadData(values);
      }.bind(this)
    }

    Search = Esearch({
      header:treeOptions.header,

      searchPanel:{
        search:treeOptions.search,
        searchLayout:{
           xl:12,
           lg:12,
           md:12,
           sm:24,
           xs:24
        },
        layout:{ 
            //对应antd 中的配置
            labelCol: {
              xs: {span: 4},
              sm: {span: 6},
              md: {span: 8},
              lg: {span: 6},
              xl: {span: 4},
              xxl: {span:4}
            },
            //对应antd 中的配置
            wrapperCol: {
              xs: {span: 14},
              sm: {span: 18},
              md: {span: 14},
              lg: {span: 18},
              xl: {span: 20},
              xxl: {span: 19}
            },
        },
      },
      method:{
         // [ 可选 ] 查询图标点击钩子 返回false 屏蔽查询功能
         searchClickHook(){
            !treeOptions.isSearch&&EPrompt["warning"]("查询功能暂未开放");
            return treeOptions.isSearch
         }
      },
      renderChildType:"treeNode",
      callback:this.callback,
    });


    componentDidMount(){
      this.loadData();
    }

    loadData(params?:any){
      this.setState((prevState,props)=>{
        return{
          spinning:true
        }
      },()=>{
        treeOptions.getData(params).then((treeData)=>{
          this.setState((prevState,props)=>{
            return {
              treeData,
              spinning:false
            }
          })
        })
      })
      
    }

    onLoadData = treeNode =>  new Promise((resolve,reject)=>{
        treeOptions.getData(treeNode).then(res=>{
          treeNode.props.dataRef.children = res;
            this.setState({
              treeData: [...this.state.treeData],
            });
            resolve();
        })
    })

    renderTreeNodes = data => data.map((item) => {
      if (item.children) {
        return(
          <TreeNode title={this.renderTitle(item)} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} title={this.renderTitle(item)}  dataRef={item} />;
    })

    renderTitle(item){
      return (
        <div className={emptyTreeNodeClass}>
          <span>{item.title}</span>
          <em>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</em>
          <div>
            {treeOptions["handlePanel"].map((Option:any,index)=>{
              return(
                <Option.node key={"index"+Math.random()} onClick={()=>Option.click.call(this,item)}/>
              )
            })}
          </div>
        </div>)
    }
    handleClose(){
      this.setState((prevState,props)=>{
        return {
          visible:false,
        }
      })
    }
    render(){

      const EDprops = {
        title:`${treeOptions.header}-"详情"`,
        visible: this.state.visible,
        onClose:this.handleClose,
        closable:true,
        placement:this.state.placement,
        params:this.state.params
      }

      
      const renderContext = {
        show:treeOptions.showPage,
        edit:treeOptions.editPage,       
      }

      const RenderNode = renderContext[this.state.showPattern]();

      return(
        <Row>
            <Col span={treeOptions.span||12} className={ emptyTreeClass }>
              <Spin spinning={this.state.spinning} size="large">
                <this.Search/>
                <div className={ emptyTreeContainer } style={{minHeight:treeOptions.minHeight}}>
                  <Tree showLine loadData={ this.onLoadData } style={{minHeight:"500px"}}>
                    {this.renderTreeNodes(this.state.treeData)}
                  </Tree>
                </div>
              </Spin>
            </Col>
            <Edrawer.component {...EDprops}>
              <RenderNode/>
            </Edrawer.component>
        </Row>
      )
    }
  }
}

export default{
  name:"EtreeHoc",
  component:EtreeHoc
}

























