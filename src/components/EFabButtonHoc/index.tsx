import React ,{ Component } from 'react';
import { Button ,Icon } from 'antd';
import { tool } from "../utils/utils";
import styles from './index.less';

const { transformArrayToCircle } = tool ;
const EFabButtonHocWrapper = styles['empty-fabButtonHoc-wrapper'];
const EFabButtonHocWrapperAround = styles['empty-fabButtonHoc-wrapper-around'];
const EFabButtonHocWrapperTrigger = styles['empty-fabButtonHoc-wrapper-trigger'];

const EFabButtonHoc = ({ name,renderItem, direction="top", delay = .2 , centerStyle ,circleBtnDirection = ['top',"right",'bottom','left'] } : { name:string,renderItem:Array<any>, direction?:string ,delay?:number ,centerStyle?:any ,circleBtnDirection:Array<any>}) =>( WrapperComponent = Button) =>{

    return class extends Component{
        
        constructor(props){
            super(props);
            this.showFab = this.showFab.bind(this); 
        }

        state = {
            showFab:false
        }

        componentDidMount() {
            document.addEventListener("click", this.handleEvent.bind(this), false);
        }
        
        componentWillUnmount() {
            document.removeEventListener("click", this.handleEvent.bind(this), false);
        }

        handleEvent(event: any) {
            if(this.state.showFab){
                this.setShowFab(false)
            }
        }

        showFab(event){
            event.nativeEvent.stopImmediatePropagation();
            this.setShowFab();
        }

        setShowFab(state?:boolean){
            this.setState((prevState:{showFab:boolean},props)=>{
                return{
                    showFab:typeof state=='boolean'?state:(!prevState.showFab)
                }
            })
        }


        getDirectionStyle(index,position){
            const directive = position || direction ;
            let calculateValue = {
                bottom:-65,
                top:-65,
                left:(index==0&&directive=="left")?-45:-55,
                right:-65,
            }
            const effect = { 
                top : ( directive == "left" || directive == "right" )? "-13px" : "",
                left: ( directive == "top" || directive == "bottom" )?"50%":""
            };
            const initialValue =(directive =="left" ||directive == "right")?"50%":'-10px';
            return {
                ...effect,
                [directive]:`${this.state.showFab?`${(index+1)*calculateValue[directive]}px`:initialValue}`
            }
        }

        renderRabButton(){
            if(direction=="circle"){
                let awaitRender = transformArrayToCircle(renderItem, circleBtnDirection);
                return Reflect.ownKeys(awaitRender).map((circleDirection,index)=>{
                    return this.renderBtn(awaitRender[circleDirection],circleDirection);
                })
                
            }
            return this.renderBtn(renderItem);
        }

        renderBtn(awaitRender,circleDirection?:any){
            return awaitRender.map((item:any,index)=>{
                return(
                    <div key = {item.icon} className={`${EFabButtonHocWrapperAround} `} 
                        onClick={item.click.bind(this,item.id)}
                        style = {{ 
                            ...this.getDirectionStyle(index,circleDirection),
                            transition:` ${ circleDirection } ${delay}s, transform ${delay}s , opacity ${delay}s`,
                            transform:`${this.state.showFab?'scale(1)':'scale(0)'}`,
                            opacity:`${this.state.showFab?1:0}`,
                        }}
                        >
                    <Icon type={ item.icon }/>
                    </div>
                )
            })
        }
        render(){
            return (
                <section className={ EFabButtonHocWrapper }  style = {centerStyle} >
                    <WrapperComponent  className={ EFabButtonHocWrapperTrigger }  type="primary" size="small" icon={ this.state.showFab ? ((direction  =="top"|| direction =="bottom")?"caret-up":"caret-right" ): ((direction == "top"|| direction == "bottom")?"caret-down":"caret-left")  } onClick={this.showFab}>{ name }</WrapperComponent>
                    {this.renderRabButton()}
                </section>
            )
        }
    }
}

export default{
	name:"EFabButtonHoc",
	component:EFabButtonHoc
}
