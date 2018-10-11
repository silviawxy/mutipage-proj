import React  from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader';
class SearchBar extends React.Component{
    constructor(props){
      super(props);
      this.changeHandle = this.changeHandle.bind(this);
    }
    changeHandle(ev){
      this.props.onSearch(ev.target.value);
    }
    render(){
      return (<input type="text" name="search" placeholder="Search..." onChange={this.changeHandle}/>);
    }
  }
//   模块热加载，页面无刷新
  export default hot(module)(SearchBar);