/* eslint prefer-promise-reject-errors: off */
import axios from 'axios';
import Jsonp from 'jsonp';
// import { toUrl } from './urlHelper.js';
// import { tokenObj } from './tokenParams.js';
// 对象转url &连接格式
export const toUrl = (obj) => {
	let str = '';
	Object.keys(obj).map(item => {
		str += `${item}=${obj[item]}&`;
	});
	return str.slice(0, -1);
};
axios.defaults.timeout = 6500;
export const ajax = async (params = {}) => {
	return new Promise((resolve, reject) => {
		axios(params).then(({ data }) => {
			if (data.status == 0) {
				if (params.isAll) {
					resolve(data);
					return;
				}
				if (params.isJson === true) {
					resolve(data.data);
					return;
				}
				resolve(data.msg);
				return;
			}
			reject(data);
		}).catch(err => {
			if (typeof err.message === 'string' && err.message.indexOf('timeout') > -1) {
				reject({ msg: '请求超时, 请重试' });
				return;
			}
			reject(err);
		});
	});
};
// const _token = (isToken) => {
// 	if (isToken === true) {
// 		return tokenObj;
// 	}
// 	return {};
// };
// params = { url参数对象 }
// config = {param: '后台取方法的key', name: '回调方法名'}
export const jsonp = ({ url, isToken = false, params = {}, config = { param: 'callback' } }) => {
	return new Promise((resolve, reject) => {
		url += (~url.indexOf('?') ? '&' : '?') + toUrl(Object.assign(params));
		Jsonp(url, params, (status, res) => {
			if (status) reject(status);
			if (res && [0, 'success', 'SUCCESS'].indexOf(res.status) > -1) {
				resolve(res.data);
			}
			reject(res);
		});
	});
};
// get请求方式 { url: '', params: {} } 详情可参阅axios文档
export const get = (params = { params: {}, isToken: false }) => {
	if (params.isToken === true) {
		let tokenParams = {
			isToken: params.isToken,
			type: 'GET',
			data: params.params
		};
		params.params = Object.assign({}, params.params);
	}
	return ajax(Object.assign({ methods: 'get', withCredentials: true }, params));
};
// 获取json文件内容
export const json = (params) => {
	return ajax(Object.assign({ methods: 'get', isJson: true }, params));
};
// post请求方式 { url: '', data: {} } 详情可参阅axios文档
export const post = (params = { data: {}, isToken: true }) => {
	if (params.isToken === true) {
		params.data = Object.assign({}, params.data);
	}
	return ajax(Object.assign({ methods: 'post' }, params));
};
/* 加载js文件
 opts.url: js路径
 opts.params 路径携带参数
 opts.loadRemove 自动移除创建的script
*/
export const script = (opts = { }) => {
	let options = {
	  url: '',
	  params: {},
	  loadRemove: true
	};
	options = Object.assign(true, options, opts);
	// 请求参数
	let queryStr = '',
		script = document.createElement('script');
	script.async = 'async';
	for (let query in options.params) {
	  queryStr += `${query}=${options.params[query]}&`;
	}
	if (queryStr) {
	  queryStr = queryStr.slice(0, -1);
	  if (options.url.lastIndexOf('&') === options.url.length - 1) {
			options.url += queryStr;
	  } else {
			options.url += '&' + queryStr;
	  }
	}
	script.src = options.url;
	return new Promise((resolve, reject) => {
		let headEl = document.getElementsByTagName('head')[0];
		script.onload = script.onreadystatechange = function (event) {
			if ([undefined, 'loaded', 'complete'].indexOf(this.readyState) > -1) {
				if (options.loadRemove) {
					script.onload = null;
					headEl.removeChild(script);
				}
				script.onreadystatechange = null;
				resolve();
				return;
			}
			reject(new Error(event));
		};
	  script.onerror = reject;
	  headEl.appendChild(script);
	});
};

// 判断http/https
export const isHttps = location.protocol.toLowerCase().indexOf('https') > -1;
