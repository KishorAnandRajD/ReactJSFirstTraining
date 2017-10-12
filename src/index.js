import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import element from './hello_world_const_element'; // For HelloWorld const element
import HelloWorldComponent from './hello_world_class_component';  // For HelloWorld Class Component
import HelloWorldFunction from './hello_world_function_component' // For HelloWorld Function component
import elementEmbedExpressions from './embed_expressions_jsx_const_element';// For Embed Expressions const element
import getGreeting from './embed_expressions_jsx_export_function';// For Embed Expressions, Function is exported
import elementUserDefinedComponent from './user_defined_component_render';// For User defined component render
import FnComposeUserDefinedComponent from './composing_user_defined_components' ;// For Multiple rendering of user defined component
import ComponentSegregation from './component_segregation';// This is for component segregation
import StateLifecycleClock from './state_lifecycle_clock_component';// This is for State and Lifecycle features
import EventOnClickAsFunction from './event_onClick_asFunction'; // onClick Event called as Function
import ToggleEventOnClickAsMethodInClass from './event_onClick_asMethodInClassComponent';// onClick called as Method in a class component
import ConditionalRenderingBasedOnState from './conditional_rendering_basedon_state'// Conditional Rendering based on state
import ConditionalRenderingBasedonProps from './conditional_rendering_basedon_props' // Conditional Rendering based on props
import ConditionalRenderingANDOperatorMailbox from './conditional_rendering_AND_operator';// Conditional Rendering with && operator
import HideComponentRenderingPage from './conditional_rendering_hide_component';// Hide component from Rendering
import listItemsArrayMapElements from './lists_array_map_elements';//ListItems Array Map to Elements
import ListItemsArrayMapFunction from './lists_array_map_function' //ListItems Array Map to Function
import ListItemsArrayMapKeyFunction from './lists_array_map_key_function' //ListItems Array Map Key to Function
import ListItemComponentMapKeyFunctionWrong from './list_component_map_key_function_wrong';// Give Key to Components (WRONG APPROACH)
import ListItemComponentMapKeyFunctionCorrect from './list_component_map_key_function_correct';// Give Key to Components (CORRECT APPROACH)
import ListItemUniqueKeySiblingsBlog from './list_component_key_unique_for_siblings';// Unique key for Siblings
import FormControlledComponent from './form_controlled_component';// Form Controlled components
import FormControlledComponentTextArea from './form_controlled_component_textarea';// Form Controlled components text area
import FormControlledComponentDropdown from './form_controlled_component_dropdown';// Form Controlled components Drop down field
import FormControlledComponentMultipleInputs from './form_controlled_component_multipleinputs';// Form controlled component with multiple inputs
import LiftingStateUpCalculator from './lifting_state_up';// Change component rendering based on value from other component
import LiftingStateUpSecondInputCalculator from './lifting_state_up_secondinput';// Change component rendering based on value from other component. Add a second input
import LiftingStateUpMoveStateToCalculator from './lifting_state_up_move_state_to_calculator' // LIfting the states from child component to parent component
import ChildrenPropWelcomeDialog from './children_prop';// Rendering props.children
import ChildrenPropSplitPane from'./children_prop2';// Rendering props.children by passing elements as objects
import SpecializationWelcomeDialog from './children_prop_component_specialization';// Special cases by composition
import ChildPropComponentClassSignUpDialog from './children_prop_component_class';// props.children for component class


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(element, document.getElementById('root'));   // For HelloWorld const element
const userprop={
  name:'Kishor Functional Component'
};
//ReactDOM.render(HelloWorldFunction(userprop), document.getElementById('root'));   // For HelloWorld Function Component

//ReactDOM.render(<HelloWorldComponent customname="Custom Name Kishor props"/>, document.getElementById('root'));   // For HelloWorld class Component

//ReactDOM.render(elementEmbedExpressions,document.getElementById('root'));// For Embed Expressions const element

const user={
  firstName:'Kishor',
  lastName: 'Anand'
};
//ReactDOM.render(getGreeting(user),document.getElementById('root'));// For Embed Expressions Function is exported
//ReactDOM.render(getGreeting(),document.getElementById('root'));// For Embed Expressions Function is exported WITHOUT ARGUMENT

// Updating a Rendered element on the fly
//*******************************************
/*React elements are immutable. Once you create an element, you can't change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

Consider this ticking clock example: */
/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000); */ //Windows setInterval() Method
/*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

Tip: 1000 ms = 1 second.

Tip: To execute a function only once, after a specified number of milliseconds, use the setTimeout() method. */
//It calls ReactDOM.render() every second from a setInterval() callback.

//ReactDOM.render(elementUserDefinedComponent,document.getElementById('root'));// For Embed Expressions const element  // For user defined component render

//ReactDOM.render(<FnComposeUserDefinedComponent/>,document.getElementById('root'));// For Multiple rendering of user defined component

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

/*
ReactDOM.render(
  <ComponentSegregation
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);// This is for component segrefations
*/

//ReactDOM.render(<StateLifecycleClock/>,document.getElementById('root'));// This is for State and Lifecycle features

//ReactDOM.render(<EventOnClickAsFunction/>,document.getElementById('root'));//// onClick Event called as Function

//ReactDOM.render(<ToggleEventOnClickAsMethodInClass/>,document.getElementById('root'));// onClick called as Method in a class component


//ReactDOM.render(<ConditionalRenderingBasedonProps isLoggedIn={true}/>,document.getElementById('root'));// Conditional Rendering based on props

//ReactDOM.render(<ConditionalRenderingBasedOnState/>,document.getElementById('root'));// Conditional Rendering based on state

const messages = ['React', 'Re: React', 'Re:Re: React'];
//ReactDOM.render(<ConditionalRenderingANDOperatorMailbox unreadMessages={messages} />,document.getElementById('root'));// Conditional Rendering with && operator

//ReactDOM.render(<HideComponentRenderingPage/>,document.getElementById('root'));// Hide component from Rendering

//ReactDOM.render(<ul>{listItemsArrayMapElements}</ul>,document.getElementById('root'));//ListItems Array Map to Elements

const numberlist=[1,2,3,4,5];
//ReactDOM.render(<ListItemsArrayMapFunction numbers={numberlist}/> ,document.getElementById('root'));//ListItems Array Map to Function

//ReactDOM.render(<ListItemsArrayMapKeyFunction numbers={numberlist}/> ,document.getElementById('root'));//ListItems Array Map Key to Function

//ReactDOM.render(<ListItemComponentMapKeyFunctionWrong numbers={numberlist}/> ,document.getElementById('root'));// Give Key to Components (WRONG APPROACH)
//ReactDOM.render(<ListItemComponentMapKeyFunctionCorrect numbers={numberlist}/> ,document.getElementById('root'));// Give Key to Components (CORRECT APPROACH)

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
//ReactDOM.render(<ListItemUniqueKeySiblingsBlog posts={posts}/> ,document.getElementById('root'));// Give Key to Components (CORRECT APPROACH) //Unique Keys for sibling elements

//ReactDOM.render(<FormControlledComponent/> ,document.getElementById('root'));// Form Controlled Components

//ReactDOM.render(<FormControlledComponentTextArea/> ,document.getElementById('root'));// Form Controlled Component text area

//ReactDOM.render(<FormControlledComponentDropdown/> ,document.getElementById('root'));// Form Controlled components Drop down field

//ReactDOM.render(<FormControlledComponentMultipleInputs/> ,document.getElementById('root'));// Form Controlled components with multiple inputs

//ReactDOM.render(<LiftingStateUpCalculator/> ,document.getElementById('root'));// Change component rendering based on value from other component
//ReactDOM.render(<LiftingStateUpSecondInputCalculator/> ,document.getElementById('root'));// Change component rendering based on value from other component. Add a second input

//ReactDOM.render(<LiftingStateUpMoveStateToCalculator/> ,document.getElementById('root'));// LIfting the states from child component to parent component
//ReactDOM.render(<ChildrenPropWelcomeDialog/> ,document.getElementById('root'));// Rendering props.children

//ReactDOM.render(<ChildrenPropSplitPane/> ,document.getElementById('root'));// Rendering props.children by passing elements as objects

//ReactDOM.render(<SpecializationWelcomeDialog/> ,document.getElementById('root'));// Special cases by composition

//ReactDOM.render(<ChildPropComponentClassSignUpDialog/> ,document.getElementById('root'));// props.children for component class

registerServiceWorker();
