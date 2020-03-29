import React from 'react';
import styles from './Form.module.css';
import Button from "./Button/Button";
import Input from "./Input/Input";
import Span from "./Span/Span";


class Form  extends  React.Component{


  newMessageText = React.createRef();

  state = {
    spanNumber: 10,
  };


  addClickHandler = () => {
    let text = this.newMessageText.current.value;
    this.newMessageText.current.value = "";
    alert("Привет " + text);
  this.setState({
    spanNumber: this.state.spanNumber + 1,
  });
  };


  render() {
    return (
      <div className={styles.form}>
        <Span spanNumber={this.state.spanNumber} />
        <Input newMessageText={this.newMessageText}/>
        <Button click={this.addClickHandler}/>
      </div>
    )
  }
}

export default Form;