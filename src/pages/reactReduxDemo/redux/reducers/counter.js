import {INCREASE_COUNT,DECREASE_COUNT} from '../actionTypes';
// const initialState = {
//   count:0
// }
export default function(state = 0,action){
  // let {count} = state;
  switch(action.type){
    case INCREASE_COUNT:{
      return state + 1
    }
    case DECREASE_COUNT:{
      return state - 1
    }
    
    default:
      return state;

  }
}