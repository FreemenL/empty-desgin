import React,{ Component } from 'react';
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import styles from './index.less';
	
interface Props{
	imgUrl:Array<{url:string,alt:string}>, //图片信息
	closeTag:boolean, //是否显示清除标志
	handleDel:Function //点击清除的回调
}
class Eviewer extends Component<Props,any>{
	viewer
	containerRef
	static defaultProps={
		imgUrl:[{
			url:"https://img3.doubanio.com/view/note/l/public/p55800842.webp",
			alt:"pic"
		},{
			url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535975713921&di=6cf5521422438b1f165d3bd82d10e406&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ca2a59eeec68a801216a4b01865c.jpg%401280w_1l_2o_100sh.jpg",
			alt:"pic"
		}],
		closeTag:true
	}
	constructor(props){
		super(props);
		this.containerRef = React.createRef();
		this.handleDel = this.handleDel.bind(this);
	}

	componentDidMount(){
		this.initPicker();
	}

	componentDidUpdate(prevProps) {
		if (!_.isEqual(this.props.imgUrl,prevProps.imgUrl)) {
			this.viewer&&this.viewer.destroy();
			this.initPicker();
		}
	}
	componentWillUnmount() {
		this.viewer&&this.viewer.destroy();
	}
	initPicker(){
		const that = this;
		this.viewer = new Viewer(this.containerRef.current, {
	        url(img){
				return img.dataset.original;
			},
			ready() {
				const _container = that.viewer.body ? that.viewer.body.querySelector(".viewer-container") : null;
				if (!_container || _container.querySelector(`.${styles["empty-next"]}`) !== null) {
					return;
				}
				const nextNode = document.createElement("div");
				const prevNode = document.createElement("div");
				nextNode.className = styles["empty-next"];
				prevNode.className = styles["empty-prev"];
				nextNode.innerHTML = `<i  class="empty-icon empty-next-btn"/>`;
				prevNode.innerHTML = `<i  class="empty-icon empty-prev-btn"/>`;
				_container.appendChild(nextNode);
				_container.appendChild(prevNode);
				nextNode.addEventListener("click",() => {
					that.viewer.next(true);
				},false);
				prevNode.addEventListener("click",() => {
					that.viewer.prev(true);
				},false);
			},
	    });
	}

	handleDel(event){
		this.props.handleDel(event);
	}

	render(){
		return(
	      <ul className={styles["empty-viewer-container"]} ref={this.containerRef} >
	        {this.props.imgUrl.map((img,index)=>{
	        	return(
	        		<li key={img.url}>
						<img src={img.url} alt={img.alt||"pic"}  data-original={img.url}/>
						{this.props.closeTag?<span className={styles["empty-close-icon"]} onClick={this.handleDel}></span>:null}
					</li>
	        	)
	        })}
	      </ul>
		)
	}
}

export default{
	name:"Eviewer",
	component:Eviewer
}








































