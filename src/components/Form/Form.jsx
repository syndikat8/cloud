import React from 'react';
import styles from './Form.module.css';
import Button from "./Button/Button";
import Input from "./Input/Input";
import Span from "./Span/Span";
import InputIN from "./InputIN/InputIN";

class Form extends React.Component {

  state = {
    spanNumber: 10,
    countValueInput: [],
    colorInput: "paint",
    title: ""
  };

  addClickHandler = () => {
    let text = this.state.title;
    if (text === "") {
      this.setState({colorInput: "paint", spanNumber: this.state.spanNumber + 1})
    } else {
      this.addNewMessag(`Привет ${text} `);
      this.setState({colorInput: "noPaint", spanNumber: this.state.spanNumber + 1, title: ""});
    }
  };


  onTitleChanged = (e) => {
    this.setState({title: e.currentTarget.value, colorInput: ""})
  };

  addNewMessag = (count) => {
    let counts = [...this.state.countValueInput, count];
    this.setState({
      countValueInput: counts,

    })
  };

  render() {
    return (
      <div className={styles.form}>
        <Span spanNumber={this.state.spanNumber}/>
        <Input
          colorInput={this.state.colorInput}
          addClickHandler={this.addClickHandler}
          title={this.state.title}
          onTitleChanged={this.onTitleChanged}
        />
        <Button click={this.addClickHandler}/>
        <InputIN countValueInput={this.state.countValueInput}/>
      </div>
    )
  }
}

export default Form;