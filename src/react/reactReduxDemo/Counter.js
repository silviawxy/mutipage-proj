import React from 'react';
import { connect } from 'react-redux';
class Counter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    // console.log(this.props);
    const {value,onIncreaseHandle} = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseHandle}>加</button>
      </div>)
  }
}
const mapStateToProps = (state) => {
  return {
    value:state.count
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    onIncreaseHandle:()=>
    dispatch({
      type:'INCREASE_COUNT'
    })
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);