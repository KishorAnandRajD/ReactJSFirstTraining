import React,{Component} from 'react';

/*
In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors:

<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place. For example:
*/

class FormControlledComponentDropdown extends Component{
  constructor(props){
    super(props);
    this.state={value:'coconut'}; // Initialize state 'value'

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('Your favorite flavor is: '+this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        Pick your favorite La Croix flavor:
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
      </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default FormControlledComponentDropdown;
