import React from 'react';
import { Row, Col } from 'antd'; 
import styles from './index.less';

/**
 * [Ewapper description] 通用页面组件
 * @Author   freemenL
 * @DateTime 2018-11-08T16:02:01+0800
 * @param    {[type]}                 WrapperCfg [description] 页面布局配置 
 */

function EwapperHoc(wrapperCfg){
	const { Rowlayout } = wrapperCfg;
	return class  extends React.Component<any,any>{
		static displayName =`EwapperHoc()`
		constructor(props){
			super(props);
		}
		render(){
			const { children } = this.props;
			return(
				<section className={styles["empty-detail-page-wrapper"]} id="detailNode">
					<Row {...Rowlayout} gutter={24} style={{height:"100%",marginLeft:"-1px",}} id="pageContainer">
						{ React.Children.map(children,(children:any)=>{
							return React.cloneElement(children,{

							})
						})}
				    </Row>
				</section>	
			)
		}
	}    
}

export default{
	name:"EwapperHoc",
	component:EwapperHoc
}
