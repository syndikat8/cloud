import React from 'react';
import styles from './Qualities.module.css';



const Qualities = (props) => {

  let newNameQualities = props.nameQualities.map( (mq,index) => {
    return index === 1 ? <li className={styles.pain} key={mq.id}> {mq.qualitie} </li> : <li key={mq.id}> {mq.qualitie} </li>
  });

  return  (
    <div className={styles.qualities}>
      <ul>{newNameQualities}</ul>
    </div>
  )
};

export default Qualities;