import React  from 'react';
import ReactDOM from 'react-dom';
// import {json} from './utils/http.js';
import './style.scss';
import className from 'classnames';
import ORIGIN_LIST from './assets/produces.json';
// const json = require('./assets/produces.json');
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

class ProductList extends React.Component{
  render(){
    return (
      <ul>
        <h5>{this.props.category}</h5>
        {
          this.props.list.map((item, index) => {
            return <ListItem value={item} key={index}></ListItem>
          })
        }
      </ul>
    );
  }
}
function ListItem({value}){
   const {name, price, stocked} = value;
   return (
     <li>
      <p className={className({'name':true,'no-stocked':!stocked})}>{name}</p>
      <p className="price">{price}</p>
     </li>
   );
}
class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search:""
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchChange(value){
    this.setState({
      search:value
    })
  }
  
  render(){
    return (
      <div>
        <SearchBar onSearch={this.handleSearchChange}></SearchBar>
        <ProductTable search={this.state.search}></ProductTable>
      </div>
    );
  }
}

class ProductTable extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let category = {},
        categoryList = [],
        search = this.props.search;
    ORIGIN_LIST.forEach((item)=>{
      if(item.name.indexOf(search) !== -1){
        if(category[item.category]){
          category[item.category].push(item);
        }else{
          category[item.category] = [item];
        }
      }
    })
    for(let entry of Object.entries(category)){
      categoryList.push(entry);
    }
    this.state = {
      categoryList:categoryList
    };
    return (
      <div>
        {
          this.state.categoryList.map(([category="",list=[]],index)=>(
            <ProductList list={list} category={category} key={index}></ProductList>
          ))
        }
      </div>
      );
  }
}
 ReactDOM.render(<FilterableProductTable></FilterableProductTable>, document.getElementById('app'));