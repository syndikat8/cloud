import React from 'react';
import styles from './Form.module.css';


class Form  extends  React.Component{


  newMessageText = React.createRef()

  state = {
    spanNumber: 10,
  }


  addClickHandler = () => {
    let text = this.newMessageText.current.value
    this.newMessageText.current.value = ""
    alert("Привет " + text)
  this.setState({
    spanNumber: this.state.spanNumber + 1,

  })
  }


  render() {
    return (
      <div className={styles.form}>
        <span>{this.state.spanNumber}</span>
        <input ref={this.newMessageText} type="text"/>
        <button onClick={this.addClickHandler}>send</button>
      </div>
    )
  }
};

export default Form;