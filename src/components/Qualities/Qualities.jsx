import React from 'react';
import styles from './Qualities.module.css';



const Qualities = (props) => {

  let myQualities = props.nameQualities;
  let newNameQualities = myQualities.map( mq => <li className={styles.paint}  key={mq.id}> {mq.qualitie} </li>);
  return  (
    <div className={styles.qualities}>
      <ul>{newNameQualities}</ul>
    </div>
  )
};

export default Qualities;