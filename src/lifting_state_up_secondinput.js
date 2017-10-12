import React,{Component} from 'react';
/*
Lifting State Up
Adding a Second Input
Our new requirement is that, in addition to a Celsius input, we provide a Fahrenheit input, and they are kept in sync.

We can start by extracting a TemperatureInput component from Calculator. We will add a new scale prop to it that can either be "c" or "f":
*/
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if(props.cent_faren==="c") {
    if (props.celsius >= 100) {
      return <p>The water would boil in Celcius.</p>;
    }
  }else if(props.cent_faren==="f"){
    if (props.celsius >= 212) {
      return <p>The water would boil in Fahrenheit.</p>;
    }
  }
  return <p>The water would not boil.</p>;
}


/*
Next, we will create a component called Calculator. It renders an <input> that lets you enter the temperature, and keeps its value in this.state.temperature.

Additionally, it renders the BoilingVerdict for the current input value.
*/
class TemperatureInput  extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale=this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in  {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict cent_faren={scale}
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

class LiftingStateUpSecondInputCalculator extends Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default LiftingStateUpSecondInputCalculator;
