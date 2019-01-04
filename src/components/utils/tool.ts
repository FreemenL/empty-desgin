import {catchTransArrFromObj} from './captureError';

export function transData(data){
	catchTransArrFromObj(data);
	return function(res){
		catchTransArrFromObj(res);
		let resData:any = [];
		let itemNum:number = 0;
		let cacheNum = 1;
		for(let i in res){	
			for(let d in data){
				if(res[i]===d){
					itemNum++
					if(itemNum%2==0){
						Array.prototype.push.call(resData[resData.length-1],{[i]:data[d]})
					}else{
						let num = itemNum>1?itemNum-(++cacheNum):itemNum-1;
						resData[num]=[{[i]:data[d]}];
					}
				}
			}
		}
		return resData;
	}
}
export const transformMemuList = (function(){
		const resData:Array<string>=[];
		let index = 0;
		return {
			func:function getmenu(menulist){
				let length = menulist.length;
				index++;
				for(let i=0;i<length;i++){
					if(!menulist[i]["sub"]){
						resData.push(menulist[i]["pathname"])
						if(index>1){
							return
						}
					}else if(menulist[i]["sub"]&&menulist[i]["sub"].length>0){
						if(!menulist[i]["sub"][0]["sub"]){
							resData.push(menulist[i]["sub"][0]["pathname"])
						}else{
							getmenu(menulist[i]["sub"][0]["sub"])
						}
					}
				}
			},
			resData
		}
})()