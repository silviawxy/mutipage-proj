import React  from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
export default class ProductList extends React.Component{
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