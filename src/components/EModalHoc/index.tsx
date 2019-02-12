import React from 'react';
import { Modal, Button } from 'antd';


function EModalHoc(params?:any){

	return class extends React.Component<any,any>{
		static getDerivedStateFromProps(nextProps, prevState){
			return null
		}
		constructor(props){
			super(props)
		}
		state = {
		    visibles: this.props.visible,
		    confirmLoading: false,
		}
		handleOk = () => {
		    this.setState({
		      confirmLoading: true,
		    });
		    setTimeout(() => {
		      this.props.handleCancel();
		      this.setState({
		        visibles: false,
		        confirmLoading: false,
		      });
		    }, 2000);
		  }

		  handleCancel = () => {
		    this.props.handleCancel();
		    this.setState({
		      visibles: false,
		    });
		  }
		  render() {
			const { visibles, confirmLoading } = this.state;
			const { visible,handleCancel,...props}  = this.props;
		    return (
		      <div>
		        <Modal
							centered
		          visible={ visibles }
		          onOk={ this.handleOk }
		          confirmLoading={ confirmLoading }
		          onCancel={ this.handleCancel}
							{...props}
		        >
		        {this.props.children}
		        </Modal>
		      </div>
		    );
		  }
		}
}

export default{
	name:"EModalHoc",
	component:EModalHoc
}
