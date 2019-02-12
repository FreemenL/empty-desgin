import { 
    DATALIST ,
	DATALIST_LOADING, 
	DATALIST_DELETE,
    DATALIST_DELETE_LOADING,
    DATALIST_UPDATE,
    DATALIST_UPDATE_LOADING,
    DATALIST_ADD,
    DATALIST_ADD_LOADING,
} from '../action-types';

export const state_getList =  ( state = {},action:any={})=>{
	const { type ,pyload } = action;
	switch(type){
		case DATALIST:
			return {...state,...pyload};
		case DATALIST_LOADING:
			return {loading:true}
		default: 
			return {loading:true}
	}	
}


export const state_deleteDutyList =  ( state = {},action:any={})=>{
	const { type ,pyload } = action;
	switch(type){
		case DATALIST_DELETE:
			return {...state,...pyload};
		case DATALIST_DELETE_LOADING:
			return {...state,loading:true}
		default: 
			return null;
	}	
}

export const state_updateDutyList =  ( state = {},action:any={})=>{
	const { type ,pyload } = action;
	switch(type){
		case DATALIST_UPDATE:
			return {...state,...pyload};
		case DATALIST_UPDATE_LOADING:
			return {...state,loading:true}
		default: 
			return null;
	}	
}

export const state_addDutyList =  ( state = {},action:any={})=>{
	const { type ,pyload } = action;
	switch(type){
		case DATALIST_ADD:
			return {...state,...pyload};
		case DATALIST_ADD_LOADING:
			return {...state,loading:true}
		default: 
			return null;
	}	
}