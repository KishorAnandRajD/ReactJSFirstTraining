import React from 'react';

function WelcomeUserDefinedComponent(props){
  return <h1>Hello, {props.name}</h1>;
}

const elementUserDefinedComponent =<WelcomeUserDefinedComponent name="Sara"/>;

export default elementUserDefinedComponent;

/*Let's recap what happens in this example:

1.We call ReactDOM.render() with the <WelcomeUserDefinedComponent name="Sara" /> element.
2.React calls the WelcomeUserDefinedComponent component with {name: 'Sara'} as the props.
3.Our WelcomeUserDefinedComponent component returns a <h1>Hello, Sara</h1> element as the result.
4.React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>

Caveat:
Always start component names with a capital letter.
For example, <div /> represents a DOM tag, but <WelcomeUserDefinedComponent /> represents a component and requires Welcome to be in scope.

*/
