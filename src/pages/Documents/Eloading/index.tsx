import React, { Component } from "react";
import { Button } from "antd";
import components from "@components/load-component";
import autobind from "autobind-decorator";

const { Edocument, Eloading } = components;

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
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="loading组件:Eloading"
          components={[
            {
              component: (
                <Eloading.component show={this.state.show} size="large">
                  <Button onClick={() => this.showLoading()}>
                    容器loading
                  </Button>
                </Eloading.component>
              ),
              titDescripttion: "容器级别的loading",
              code: `
              import { Button } from 'antd';
              import components from '@components/load-component';
              import autobind from 'autobind-decorator';

              const { Edocument, Eloading } = components;
    
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
                    <Eloading.component 
                      show={this.state.show} 
                      size="large">
                        <Button onClick={this.showLoading} >展示loading</Button>
                    </Eloading.component>
                  )
                }

              }
            `
            },
            {
              component: (
                <Eloading.component
                  show={this.state.globalShow}
                  model="global"
                  size="large"
                >
                  <Button onClick={() => this.showLoading("globalShow")}>
                    页面loading
                  </Button>
                </Eloading.component>
              ),
              titDescripttion: "页面级别的loading",
              code: `
              import { Button } from 'antd';
              import components from '@components/load-component';
              import autobind from 'autobind-decorator';

              const { Edocument, Eloading } = components;
    
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
                    <Eloading.component
                      show={this.state.globalShow}
                      model="global"
                      size="large"
                    >
                      <Button onClick={() => this.showLoading("globalShow")}>
                        全局loading
                      </Button>
                    </Eloading.component>
                  )
                }

              }
            `
            }
          ]}
          docDescripttion="Eloading除了如下属性，还有antd Spin 组件的属性:"
          documentData={data}
        />
      </div>
    );
  }
}

export default EloadingDocuments;
