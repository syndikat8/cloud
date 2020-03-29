import React from 'react';
import styles from './Qualities.module.css';



const Qualities = (props) => {

  let myQualities = props.nameQualities;
  let newNameQualities = myQualities.map( (mq,index) => index === 1? <li className={styles.pain} key={mq.id}> {mq.qualitie} </li>: <li key={mq.id}> {mq.qualitie} </li>);
      // if(index === 1) {
      //  return <li className={styles.pain} key={mq.id}> {mq.qualitie} </li>;
      // } else {
      //   return  <li key={mq.id}> {mq.qualitie} </li>;
      //   }



  return  (
    <div className={styles.qualities}>
      <ul>{newNameQualities}</ul>
    </div>
  )
};

export default Qualities;