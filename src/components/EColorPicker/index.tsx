import React,{Component,Fragment} from 'react';
import { SketchPicker } from 'react-color';
import styles from './index.less';

interface Props{
  showPicker:string,
  handleChange:Function
}

class EColorPicker extends Component<Props,any>{
  handleChange
  constructor(props){
    super(props);
    this.handleChange = this.props.handleChange.bind(this)
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.props.showPicker!==nextProps.showPicker){
      const ele:any = document.getElementById("pageContainer");
      setTimeout(()=>{
        ele.scrollTo({
        top: 1000
      });
      },100)
      return true;
    }
    return false;
  }
  render(){
    return(
      <SketchPicker  onChange={ this.handleChange } className={`${styles["empty-color-picker"]} ${styles[this.props.showPicker]}`}/>
    )
  }
}

export default {
  name:"EColorPicker",
  component:EColorPicker
}