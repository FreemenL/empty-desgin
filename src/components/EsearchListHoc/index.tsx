import React, { Fragment } from 'react';
import freetool from 'freetool';
import SearchControl from './SearchControl';
import BadeSearch from "./BadeSearch";
import ListPanel from "./ListPanel";
import { defaultEsearchConfig } from "../constant";
 
const { mergeConfig } = freetool;

const EsearchListHoc = (pageConfig?: any) => {
  pageConfig.minHeight = "650px";
  return class extends React.Component<any, any> {
    static displayName = `EsearchHoc(BadeSearch)`
    static defaultProps = mergeConfig(defaultEsearchConfig, pageConfig && pageConfig);
    renderNode(renderChildType, contentProps, renderList) {
      const childNode = {
        default(contentProps, renderList) {
          return (<Fragment>
            <SearchControl  {...contentProps} />
            <ListPanel {...contentProps} />
          </Fragment>)
        },
        treeNode(contentProps, renderList) {
          return (
            <Fragment>
              <SearchControl {...contentProps} />
            </Fragment>
          )
        }
      }
      return childNode[renderChildType] ?
        childNode[renderChildType](contentProps, renderList) :
        childNode["default"](contentProps, renderList);
    }

    render() {
      let renderList = true;
      const { renderChildType } = this.props;
      if (renderChildType.trim() == "") {
        let State = Object.keys(this.props.State);
        State.forEach((items, indexs) => {
          if (items == this.props.listActionName && (Object.keys(this.props.State[items]).length == 1)) {
            renderList = false;
          }
        })
      }
      return (
        <BadeSearch {...this.props} render={(state, handleEvent) => {
          const contentProps = {
            ...this.props,
            state,
            handleEvent,
            onRef: handleEvent.onRef
          }
          return this.renderNode(renderChildType, contentProps, renderList);
        }} />
      );
    }
  }
}

export default {
  name: "EsearchListHoc",
  component: EsearchListHoc
}
