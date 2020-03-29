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
    newName: "",
  };

  addClickHandler = () => {
    let text = this.newMessageText.current.value;
    this.newMessageText.current.value = "";
    this.addNewName(text + " ");
  this.setState({
    spanNumber: this.state.spanNumber + 1,
  });
  };


  addNewName = (newName) => {
    let names = [...this.state.newName, newName];
    this.setState({
      newName: names
    })
  };


  render() {
    return (
      <div className={styles.form}>
        <Span spanNumber={this.state.spanNumber} />
        <Input newMessageText={this.newMessageText}/>
        <Button click={this.addClickHandler}/>
        <InputIN newName={this.state.newName}/>
      </div>
    )
  }
}

export default Form;