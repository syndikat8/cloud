import React from 'react';
import styles from './Qualities.module.css';
import {QualitieType} from "../../types/entities";

type OnPropsType = {
  nameQualities: Array<QualitieType>
}

const Qualities = (props: OnPropsType) => {


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