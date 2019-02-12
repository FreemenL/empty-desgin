export default {
	namespace:"testDemo",
	apis:{
		dataList(params){			
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					const res ={
						code: "200",
						message: "success",
						data: {
						  pageNo: 1,
						  pageSize: 10,
						  totalSize: 1,
						  totalPage: 1,
						  results: [{
							 id: 520,
							 name: "测试",
							 dutyType: 2,
							 deptId: 43,
							 deptName: "佩奇小分队",
							 color: "#2b1d74",
							 startTime: "14:32:00",
							 endTime: "14:31:00",
							 duration: 1,
							 onRange: "17:30-16:33",
							 offRange: "16:33-16:33"
						  },{
							id: 521,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 522,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 523,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 524,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 525,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 526,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 527,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 },{
							id: 528,
							name: "测试",
							dutyType: 2,
							deptId: 43,
							deptName: "佩奇小分队",
							color: "#2b1d74",
							startTime: "14:32:00",
							endTime: "14:31:00",
							duration: 1,
							onRange: "17:30-16:33",
							offRange: "16:33-16:33"
						 }]
						}
					  }
					resolve(res);
				},1000)
			})
		}
	}
}
