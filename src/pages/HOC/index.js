import React from 'react';
import ReactDom from 'react-dom';
import hoistNonReactStatic from 'hoist-non-react-statics';
import propTypes from 'prop-types';
const getDisplayName = component=>component.displayName||component.name||'comp';
const withHeader = (title="默认标题") => (WrapedComp) => {
  class HOC extends React.Component{
    static displayName = `HOC(${getDisplayName(WrapedComp)})`;
    render(){
      const newProps = {
        id: Math.round(Math.random()*100)
      }
      return (
        <fieldset>
          <legend>{title}</legend>
          <WrapedComp {...newProps} {...this.props}></WrapedComp>
        </fieldset>
      )
    }
  }
  hoistNonReactStatic(HOC,WrapedComp)
  return HOC;
}
  

class Demo extends React.Component{
  static getName=()=>{console.log('i am static')}
  // static propTypes = {
  //   getRef:propTypes.func
  // }
  render(){
    // const { ...props} = this.props;
    return (
      <div {...this.props}>i am demo</div>
    );
  }
}

const WithHeaderDemo = withHeader('demo标题')(Demo);
// console.log(WithHeaderDemo.getName)

ReactDom.render(<WithHeaderDemo></WithHeaderDemo>,document.getElementById('app'));

