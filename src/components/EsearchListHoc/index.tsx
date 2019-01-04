import  React,{ Component ,Fragment} from 'react';
import freetool from 'freetool';

import SearchControl from './SearchControl';
import BadeSearch from "./BadeSearch";
import ListPanel from "./ListPanel";
import { defaultEsearchConfig } from "../constant";
//less
import styles from './index.less';
//utils 
const { mergeConfig } = freetool;


const EsearchHoc = (pageConfig?:any)=>{
	return class extends React.Component<any,any> {
    static displayName =`EsearchHoc(BadeSearch)`
    static defaultProps = mergeConfig(defaultEsearchConfig,pageConfig&&pageConfig);
    renderNode(renderChildType,contentProps,renderList){
        const childNode = {
          default(contentProps,renderList){
            return (<Fragment>
              <SearchControl  {...contentProps}/>
              {!renderList?null:<ListPanel {...contentProps}/>}
            </Fragment>)
          },
          treeNode(contentProps,renderList){
              return(
                 <Fragment>
                  <SearchControl {...contentProps}/>
                </Fragment>
              )
          }
        } 
      return childNode[renderChildType]?
      childNode[renderChildType](contentProps,renderList):
      childNode["default"](contentProps,renderList);
    }
    render(){ 
      let renderList = true;
      const { renderChildType } = this.props;
      if(renderChildType.trim()==""){
        let ownState = Object.keys(this.props.ownState);
        ownState.forEach((items,indexs)=>{
          if(items.endsWith("_DATALIST")&&(Object.keys(this.props.ownState[items]).length==1)){
            renderList = false
          }
        }) 
      }
      return (
        <BadeSearch {...this.props} render={(state,handleEvent) => {
          const contentProps = {
            ...this.props,
            state,
            handleEvent,
            onRef:handleEvent.onRef
          }
          return this.renderNode(renderChildType,contentProps,renderList);
          }}/>
      );
    }
  }
}
export default{
	name:"EsearchHoc",
	component:EsearchHoc
}
