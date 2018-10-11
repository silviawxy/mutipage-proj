import React  from 'react';
import ReactDOM from 'react-dom';
export default class SearchBar extends React.Component{
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