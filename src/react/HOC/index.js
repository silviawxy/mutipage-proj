import React from 'react';
import ReactDom from 'react-dom';
import hoistNonReactStatic from 'hoist-non-react-statics';
import propTypes from 'prop-types';
const getDisplayName = component=>component.displayName||component.name||'comp';
const withHeader = (title="默认标题") => (WrapedComp) => {
  class HOC extends React.Component{
    static displayName = `HOC(${getDisplayName(WrapedComp)})`;
    render(){
      const {forwardedRef,...rest} = this.props;
      return (
        <fieldset>
          <legend>{title}</legend>
          <WrapedComp ref={forwardedRef} {...rest}></WrapedComp>
        </fieldset>
      );
    }
  }
  hoistNonReactStatic(HOC,WrapedComp)
  // return HOC;
  // 传递ref到被包裹的组件
  return React.forwardRef(function(props,ref){
    return (
      <HOC {...props} forwardedRef={ref}></HOC>
    )
  })
}
  

class Demo extends React.Component{
  static getName=()=>{console.log('i am static saas sdad')}
  // static propTypes = {
  //   getRef:propTypes.func
  // }
  render(){
    // const { ...props} = this.props;
    return (
      <div {...this.props}>i am demo  </div>
    );
  }
}
// 将Demo组件传递到HOC中，返回带特定功能的组件
const WithHeaderDemo = withHeader('demo标题')(Demo);
// console.log(WithHeaderDemo.getName)
const ref=React.createRef();

ReactDom.render(<WithHeaderDemo ref={ref}></WithHeaderDemo>,document.getElementById('app'));

