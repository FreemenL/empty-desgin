import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Layout ,BackTop} from 'antd';
import componentes from '@components/load-component';
import styles from './index.less';
import { config } from '@config/index'; 


const { Content, Footer} = Layout;
const { EheaderHoc ,EListHoc } = componentes;



@hot(module)
class Home extends Component {
  static getDerivedStateFromProps(nextProps,prevState){
   return null
  }
  constructor(props){
    super(props);
    this.state = {
      error:false,
      collapsed:false,
    };
  }

  componentDidMount() {
    // enquireScreen(mobile => {
    //   this.props.cutMunuStatus("CUT_STATUS",mobile);
    // },'only screen and (max-width: 1000px)');
    // this.getSubAndTitle(menus,location.hash.substr(1))
  }

  componentDidCatch(error, info) {
    this.setState((prevState,props)=>{
      return{
        error,
        info
      }
    })
  }
  
  handleback(collapsed){
    this.setState((prevState,props)=>{
      return{
        collapsed
      }
    })
  }

  getMenu(){
      return EListHoc.component({
        type:"panel",
        data:[{
          icon:"user",
          title:"个人中心"
        }]
      });
  }
  render() {
    const { LogoSrc, name, menuList, userMsg } = config;
    const HeaderCom = EheaderHoc.component({
      LogoSrc,
      name,
      menuList,
      userMsg,
      getMenu:this.getMenu
    });

    return (
      <Layout>
        <HeaderCom/>
      </Layout>
    );
  }
}



export default Home;
