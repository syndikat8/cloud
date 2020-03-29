import React from 'react';
import styles from './Form.module.css';
import Button from "./Button/Button";
import Input from "./Input/Input";
import Span from "./Span/Span";
import InputIN from "./InputIN/InputIN";


class Form  extends  React.Component{


  newMessageText = React.createRef();

  state = {
    spanNumber: 10,
    countValueInput: [],
  };

  addClickHandler = () => {
    let text = this.newMessageText.current.value;
    this.newMessageText.current.value = "";
    this.addNewMessag(`Привет ${text} `);
   this.setState({
    spanNumber: this.state.spanNumber + 1,
  });
  };


  addNewMessag = (count) => {
    let counts = [...this.state.countValueInput, count];
    this.setState({
      countValueInput: counts
    })
  };


  render() {
    return (
      <div className={styles.form}>
        <Span spanNumber={this.state.spanNumber} />
        <Input newMessageText={this.newMessageText}/>
        <Button click={this.addClickHandler}/>
        <InputIN countValueInput={this.state.countValueInput}/>
      </div>
    )
  }
}

export default Form;