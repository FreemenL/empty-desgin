import React from "react";
import { Route ,Link } from 'react-router-dom';

import styles from './index.less';

function Emenu({to,children}){
  return (
  	<Route path={to} children={(props)=>{
  		const target = props.location.pathname.split('/')[2];
  		const test = to.split('/')[1];
  		const curent = to.replace(`/${test}`,"");
  		const active = curent.startsWith(`/${target}`);
  		return(
  			<Link to={ to }>
	  			<li key={to} className={(props.match||active)?`${styles['empty-menu-item'] } ${styles['empty-menu-item-active']}`:`${styles['empty-menu-item']}`}>
	  				{ children }
	  			</li>
	  	    </Link>
  		)
  	}}/>
  )
}

export default{
	name:"Emenu",
	component:Emenu
}