import React from 'react';

function WelcomeUserDefinedComponent(props){
  return <h1>Hello, {props.name}</h1>;
}

function FnComposeUserDefinedComponent(){
  return(
    <div>
          <WelcomeUserDefinedComponent name="Sara"/>
          <WelcomeUserDefinedComponent name="Ali"/>
          <WelcomeUserDefinedComponent name="Khan"/>
    </div>
  );

}


export default FnComposeUserDefinedComponent;

/*
Composing Components:
Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an App component that renders Welcome many times:

Caveat:
Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.

*/
