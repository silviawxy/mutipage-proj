import React  from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../searchBar'
import ProductTable from '../productTable'
export default class FilterableProductTable extends React.Component{
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
          <ProductTable search={this.state.search} {...this.props}></ProductTable>
        </div>
      );
    }
  }
  