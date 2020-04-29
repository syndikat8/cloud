import React from 'react';

class Select extends React.Component {

  state = {
    options: [
      {option: "Low", id: 1},
      {option: "Middle", id: 2},
      {option: "Height", id: 3},
    ],
    value: "Height"
  }

  handlerChange = (e) => {
    this.setState({value: e.target.value})
  }

  render = () => {
    let options = this.state.options.map(o => <option key={o.id} value={o.option}>{o.option}</option>)
    return (
      <select
        value={this.state.value}
        onChange={this.handlerChange}>
        {options}
      </select>
    );
  }
}

export default Select;

