import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Layout ,BackTop} from 'antd';
import componentes from '@components/load-component';
import styles from './index.less';
import { config } from '@config/index'; 
import Routes from '@pages/load-child-routes';
import ChildRoute from '@router/router';
import freeTool from 'freetool';
const { Content, Footer} = Layout;
const { EheaderHoc ,EListHoc ,Prompt ,ESiderMenu ,Ebeard } = componentes;


const contentClass = styles["empty-system-content"];
const contentWrapperClass = `${styles["empty-system-content-wrapper"]}`;
const contentFooterClass = styles["empty-system-content-footer"];

@hot(module)
class Home extends Component<any,any> {
  static getDerivedStateFromProps(nextProps,prevState){
    return null
  }
  constructor(props){
    super(props);
    this.state = {
      error:false,
      collapsed:false,
    };
    this.handleback = this.handleback.bind(this);
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
        width:"150px",
        data:[{
          icon:"user",
          title:"个人中心",
          click:function(){
              Prompt.component["info"]("个人中心")
          }
        },{
            icon:"setting",
            title:"个人设置",
            click:function(){
                Prompt.component["info"]("个人设置");
            }
        }]
      });
  }
  
  render() {
    const { LogoSrc, name, menuList, userMsg ,footerText ,mainRoute } = config;
    const HeaderCom = EheaderHoc.component({
      LogoSrc,
      name,
      menuList,
      userMsg,
      getMenu:this.getMenu
    });
    let pathname = this.props.location.pathname||'';
    freeTool.getPathname.func(menuList)
    const pathArr = Array.from(new Set(freeTool.getPathname.resData));
    if(!pathArr.includes(this.props.location.pathname)){
      const pathArr = this.props.location.pathname.split('/');
      const ends = pathArr.splice(-1,1).join('').split('-')[0]
      const path = pathArr.join("/");
      pathname = `${path}/${ends}`;
    }
    const menuLists = freeTool.getMenuList(pathname,menuList)||[];
    const isHome = this.props.location.pathname=="/home/home";
    return (
      <Layout  className={contentClass} >
        <HeaderCom/>
        <Layout>
            { menuLists.length>0?<ESiderMenu.component callback={this.handleback} menuList={menuLists}/>:null}
            <Layout>
              {(isHome)?
                null:
                <div style={{left:this.state.collapsed?"80px":"280px"}}>
                  <Ebeard.component menus={menuLists}/>
                </div>
              }              
                <Content id='content' className={contentWrapperClass}>
                    <ChildRoute route={Routes.filter((route:any)=>!mainRoute.includes(route.path))} type='child' />
                    <Footer className={contentFooterClass}>
                      { footerText }
                    </Footer>
                </Content>
              <BackTop  target ={()=>document.getElementById('content')} visibilityHeight={100}/>
            </Layout>
        </Layout>
      </Layout>
    );
  }
}



export default Home;
