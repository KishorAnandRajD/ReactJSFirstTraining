import React,{Component} from 'react';

/*
In HTML, a <textarea> element defines its text by its children:

<textarea>
  Hello there, this is some text in a text area
</textarea>

In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input:


*/

class FormControlledComponentTextArea extends Component{
  constructor(props){
    super(props);
    this.state={value:'Please write an essay about your favorite DOM element.'}; // Initialize state 'value'

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    /*
    Since the value attribute is set on our form element, the displayed value will always be this.state.value, making the React state the source of truth. Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.

    With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:
    */
    //this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event){
    alert('An essay was submitted: '+this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay: <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default FormControlledComponentTextArea;
