/*第三方模块*/
import classNames from 'classnames';
import  React,{ Component } from 'react';
import { Form } from 'antd';
import autobind from 'autobind-decorator';

/* 自定义模块 */
import EformIndex from '../Eform/index';
import styles from './index.less';

const {component:Eform} = EformIndex;
const listSearchSection = styles['empty-search-section'] //筛选区域基本样式


interface SearchControlProps{
  state:any,//basesearch 中的state
  form:any, // antd 中的form
  [propName: string]: any
}

@autobind
class Search extends Component<SearchControlProps,any>{
  inputLebgth //为优化render 保存的实例属性
  Eform
  constructor(props){
    super(props);
    this.inputLebgth = 0;
    this.Eform = Eform.bind(this);
  }
  componentDidMount(){
   this.props.handleEvent.getListData();
  }

  shouldComponentUpdate(nextProps,nextState){
    const currentValue = this.props.form.getFieldsValue();
    const length = JSON.stringify(currentValue).length;
    if(this.props.state.searchState===nextProps.state.searchState&&length===this.inputLebgth){
      return false;
    }
    this.inputLebgth = length;
    return true;

  }

  handleSearch(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          this.props.handleEvent.getListData(values);
      }
    });
  }

  handleReset(){
    this.props.form.resetFields();
  }

  getElement(){
    const SearchItem = this.Eform
    return this.props.searchPanel?(<SearchItem/>):null;
  }
  render(){
    const listPanelMenuListClass = classNames(listSearchSection,{//筛选栏收展状态
      [`${styles['empty-search-section-show']}`]:!this.props.state.searchState,
      [`${styles['empty-search-section-hide']}`]:this.props.state.searchState,
    });
    return(
      <section className={listPanelMenuListClass}>
        <div className={styles["empty-search-control-padding"]}>
          {this.getElement()}
        </div>
      </section>
    )
  }
}

export default Form.create()(Search)