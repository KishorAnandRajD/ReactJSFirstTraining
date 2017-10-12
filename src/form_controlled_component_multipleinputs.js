import React,{Component} from 'react';

/*
Handling Multiple Inputs
When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.
*/

class FormControlledComponentMultipleInputs extends Component{
  constructor(props) {
      super(props);
      // State names to match with the control names
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };

      this.handleInputChange =this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      // If target.type is checkbox, then set 'value' = target.checked,
      // Else set 'value'= target.value
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      // Whichever input was selected, get the name
      const name = event.target.name;

      // Since the state names match with control names, set the value in one line of code. This will help with there are even 'n' or more controls
      this.setState({
        [name]: value
      });
    }

    render() {
      return (
        <form>
          <label>
            Is going:
                  <input name="isGoing" type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
                    <input name="numberOfGuests" type="number"
                      value={this.state.numberOfGuests}
                      onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
}
export default FormControlledComponentMultipleInputs;
