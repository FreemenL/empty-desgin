import React ,{ Component } from 'react';
import prism from "prismjs"

interface Props{
    children:string,
    showNumber?:boolean,
    language?:string
}
class EcodeHighlight extends Component<Props,any>{

    static defaultProps={
        showNumber:true,
        language:"tsx"
    }

    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount(){
        prism.highlightAllUnder(this.ref.current);
    }
    ref
    _style_wrapper = {borderTop:"1px dashed #ebedf0",padding:"10px 15px"}
    _style_code = {maxHeight:"1200px"}

    render(){
        const { children ,showNumber, language } = this.props;
        return(
            <div ref={this.ref} style={this._style_wrapper} className="animated fadeIn">
                <pre className={showNumber?'line-numbers':''} style={this._style_code}>
                    <code className={`language-${language}`}>{`
                        ${children}
                    `}
                    </code>
                </pre>  
            </div>
        )
    }
}

export default {
    name:"EcodeHighlight",
    component:EcodeHighlight
}