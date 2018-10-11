import {createStore} from 'redux';
import reducer from './reducers/index';
// import counter from './reducers/counter';
export default createStore(reducer);