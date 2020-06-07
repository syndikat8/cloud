import React, {ChangeEvent} from 'react';
import styles from './Input.module.css';

type OnPropsType = {
  title: string
  colorInput: string
  addClickHandler: () => void
  onTitleChanged: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: OnPropsType) => {

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      props.addClickHandler()
    }
  }

  const inputClassName = props.colorInput === "paint" ? styles.input : "";

  return <input
    className={inputClassName}
    type="text"
    onKeyPress={onKeyPress}
    onChange={props.onTitleChanged}
    value={props.title}
  />
}

export default Input;