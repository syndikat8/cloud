import React from 'react';
import styles from './Input.module.css';


class Input  extends  React.Component{


  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.addClickHandler()
    }
  };




  render() {
    const inputClassName = this.props.colorInput === "paint" ? styles.input : "";

    return <input
      className={inputClassName}
      type="text"
      onKeyPress={this.onKeyPress}
      onChange={this.props.onTitleChanged}
      value={this.props.title}
    />
  }
}

export default Input;