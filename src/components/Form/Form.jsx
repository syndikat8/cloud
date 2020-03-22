import React from 'react';
import styles from './Form.module.css';


const Form = () => {

  let newMessageText = React.createRef();

  let addMessag = () => {
   let text = newMessageText.current.value;
    alert("Привет "+ text);
    newMessageText.current.value = "";
  };

  return (
    <div className={styles.form}>
      <span>10000000</span>
      <input ref={newMessageText} type="text"/>
      <button onClick={addMessag}>send</button>
    </div>
  )
};

export default Form;