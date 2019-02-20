import React, { Component } from "react";
import { Button } from "antd";
import autobind from "autobind-decorator";
import { Edocument, Eloading } from 'emptyd';

const data = [
  {
    key: "1",
    title: "show",
    explain: " 是否显示loading ",
    type: " boolean ",
    default: " true "
  },
  {
    key: "2",
    title: " model ",
    explain: " loading 的模式  '' | 'global' ",
    type: "string",
    default: "' '"
  }];

@autobind
class EloadingDocuments extends Component<any, any> {

  state = {
    show: false,
    globalShow: false
  };

  componentWillUnmount() {
    clearTimeout(this.timmer);
  }

  showLoading(params) {
    this.handleloading(params);
  }

  handleloading(params) {
    this.setState(
      (prevState, props) => ({ [params ? params : "show"]: true }),
      () => {
          this.timmer = setTimeout(() => {
              this.setState((prevState, props) => ({
                [params ? params : "show"]: false
              }));
          }, 3000);
      }
    );
  }
  
  timmer
  
  render() {
    return (
        <Edocument
          title="loading组件:Eloading"
          components={[
            {
              component: (
                <Eloading show={this.state.show} size="large">
                  <Button onClick={() => this.showLoading(false)}>
                    容器loading
                  </Button>
                </Eloading>
              ),
              titDescripttion: "容器级别的loading",
              code: `
              import { Button } from 'antd';
              import { Edocument, Eloading } from 'emptyd';
              import autobind from 'autobind-decorator';
    
              @autobind
              class EloadingDocuments extends Component<any, any> {
                timmer

                state={
                  show:false
                }

                componentWillUnmount(){
                  clearTimeout(this.timmer);
                }

                showLoading(){
                  this.setState((prevState,props)=>({show:true}),()=>{
                    this.timmer = setTimeout(() => {
                      this.setState((prevState,props)=>({show:false}));
                    }, 3000);
                  });
                }

                render(){
                  return(
                    <Eloading 
                      show={this.state.show} 
                      size="large">
                        <Button onClick={this.showLoading} >展示loading</Button>
                    </Eloading>
                  )
                }

              }
            `
            },
            {
              component: (
                <Eloading
                  show={this.state.globalShow}
                  model="global"
                  size="large"
                >
                  <Button onClick={() => this.showLoading("globalShow")}>
                    页面loading
                  </Button>
                </Eloading>
              ),
              titDescripttion: "页面级别的loading",
              code: `
              import { Button } from 'antd';
              import { Eloading } from 'emptyd';
              import autobind from 'autobind-decorator';
    
              @autobind
              class EloadingDocuments extends Component<any, any> {
                timmer

                state={
                  show:false
                }

                componentWillUnmount(){
                  clearTimeout(this.timmer);
                }

                showLoading(params) {
                  this.handleloading(params);
                }
              
                handleloading(params) {
                  this.setState(
                    (prevState, props) => ({ [params ? params : "show"]: true }),
                    () => {
                        this.timmer = setTimeout(() => {
                            this.setState((prevState, props) => ({
                              [params ? params : "show"]: false
                            }));
                        }, 3000);
                    }
                  );
                }
            
                render(){
                  return(
                    <Eloading
                      show={this.state.globalShow}
                      model="global"
                      size="large"
                    >
                      <Button onClick={() => this.showLoading("globalShow")}>
                        全局loading
                      </Button>
                    </Eloading>
                  )
                }

              }
            `
            }
          ]}
          docDescripttion="Eloading除了如下属性，还有antd Spin 组件的属性:"
          documentData={data}
        />
    );
  }
}

export default EloadingDocuments;
