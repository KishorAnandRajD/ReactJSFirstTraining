import React,{Component} from 'react';

class FormControlledComponent extends Component{
  constructor(props){
    super(props);
    this.state={value:''}; // Initialize state 'value'

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
    alert('A Name was submitted: '+this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default FormControlledComponent;
