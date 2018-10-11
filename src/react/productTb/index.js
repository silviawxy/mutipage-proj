import React  from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable'

// import {json} from './utils/http.js';
import './style.scss';
import className from 'classnames';
import list from './assets/produces.json';





ReactDOM.render(
  <FilterableProductTable list={list}></FilterableProductTable>, 
  document.getElementById('app'));