import React  from 'react';
import ReactDOM from 'react-dom';
import ProductList from '../productList'
export default class ProductTable extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      let category = {},
          categoryList = [],
          {search,list} = this.props;
      list.forEach((item)=>{
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