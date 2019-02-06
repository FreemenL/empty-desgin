import React from 'react';
import { Table } from 'antd';

const TableTemplate = (function (this:any){
	let prevSata = [];
	return function(this:any){
		let responseList = [];
		let loading = true;
		let dataSource = [];
		const { tableConfig,tableColumns,pagination} = this.props.listConfig;
		Object.keys(this.props.ownState).forEach((item,index)=>{
			if(item.endsWith(this.props.listActionName)&&!this.props.ownState[item]["loading"]){

				const responseData = this.props.ownState[item]["response"];
				loading = this.props.ownState[item]["loading"];
				responseList =  responseData["results"]||responseData;
				Array.prototype.push.call(prevSata,responseList);
				if(responseData.totalSize){
					pagination.total = responseData.totalSize;
			    	pagination.current = responseData.pageNo;
			    	pagination.pageSize = responseData.pageSize;
				}
			}
		})
		if(responseList.length>0){
			dataSource = responseList
		}else{
			dataSource  = prevSata[prevSata.length-1];
			prevSata=[];
		}
		tableColumns.forEach((item,idnex)=>{
			if(item.render){item.render = item.render.bind(this)}
		})
		return(<Table
			loading={loading}
			columns={tableColumns} 
			dataSource={dataSource}
			pagination={pagination.total?{...pagination}:false}
			onChange={this.handleTableChange}
			{...tableConfig}
			rowKey={record=>record[tableConfig.rowKey]+(Math.random().toString())}
			/>);
		}
})()

export default TableTemplate;