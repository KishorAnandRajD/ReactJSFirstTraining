import React,{Component} from 'react';

/*
When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. For example, this Toggle component renders a button that lets the user toggle between "ON" and "OFF" states:
*/
class ToggleEventOnClickAsMethodInClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};// State

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      //prevState is a reference to the previous state. It should not be directly mutated.
      this.setState((prevState) => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

/*
You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

If calling bind annoys you, there are two ways you can get around this. please check the below link
https://facebook.github.io/react/docs/handling-events.html
*/
export default ToggleEventOnClickAsMethodInClass;
