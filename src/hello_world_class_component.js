import React, { Component } from 'react';

class HelloWorldComponent extends Component {
  render(){
    return(
      <div>
        <h1>Hello, World!! from Class Component</h1>
        <h2>Hello, {this.props.customname}</h2>
      </div>
    );
  }
}




export default HelloWorldComponent;
