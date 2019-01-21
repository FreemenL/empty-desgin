import React,{ Component }from 'react';
import { Row, Col ,Tooltip ,Icon } from 'antd'; 
import { tool } from '../utils/utils';
import styles from './index.less';

/**
 * [EListHoc description]
 * @Author   freemenL
 * @param    {[type]}                 data                       []
 * @param    {[type]}                 Effect?:any [自定义组件]
 *
 *用例： 
 *return EListHoc({
	"班次名称":"name",
	"所属部门":"deptName",
	"班次类型":"dutyType",
	"上班时间":"startTime",
	"下班时间":"endTime",
	"上班打卡时间范围":"onRange",
	"下班打卡时间范围":"offRange",
	"午休时间":"duration"
},Test)
 *
 * 
 */
const emptyListpanel = styles['empty-list-panel'];

const { transData } = tool;
function EListHoc(data,Effect?:any){
	const type = data.type||'default';
	if(_.isEmpty(data)){
		return ({params})=>(<Effect/>)
	}
	const listResult = {
		panel:(function(){
			return(
				<ul className={emptyListpanel}>
					{data.data.map((dataItem,index)=>{
						return(
							<li>{dataItem.icon?<Icon type={dataItem.icon} />:null}{dataItem.title}</li>
						)
					})}
				</ul>
			)
		})(),
		default:function({params}){
			const currentData = transData(params)(data.data);
			return(
				<section  className={styles["empty-detail-wrapper"]}>
					<Row gutter={24} >
					  {currentData.map((item,index)=>{
						  return(
							  <Col key={`listWrapper${Math.random()}`} xxl={16} xl={22} lg={24} md={24} sm={24} xs={24} className={styles["empty-detail-wrapper-row"]}>
									{item.map((items,indexs)=>{
										return(
											<div key={`list${Math.random()}`}>
												<span>{Object.keys(items)[0]}</span>
												<Tooltip placement="right" title={Object.values(items)[0]}>
												<span>{Object.values(items)[0]}</span>
											</Tooltip>
											</div>
										)
									})}
							</Col>
						  )
					  })}
					</Row>
					{Effect&&<Effect params={params}/>}
				</section>
			)
		}
	}
	return listResult[type];
}

export default{
	name:"EListHoc",
	component:EListHoc
}


