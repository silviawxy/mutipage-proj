import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Counter from './Counter'

ReactDom.render(
  <Provider store={store}>
    <Counter></Counter>
  </Provider>
  ,document.getElementById('app'))