import React,{ Component }from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

interface Props{
	children:any,
	style?:object
}

class EText extends Component<Props,object>{
	constructor(props){
		super(props);
	}
	render(){
		const { style,...reset } = this.props;
		return(
			<div className="texty-demo" style={ style }>
		    <Texty {...reset} >
		    	{this.props.children}
		    </Texty>
		  </div>
		)
	}
}

export default{
  name:"EText",
  component:EText
}
