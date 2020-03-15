import React from 'react';
import Message from "./components/Message/Message";
import MyName from "./components/MyName/MyName";
import styles from "./Container.module.css";


const App = () => {

  let nameQualities = [
    {qualitie: "Punctual", id: "1"},
    {qualitie: "Sportsman", id: "2"},
    {qualitie: "Сonfident", id: "3"}
  ];


  let newNameQualities = nameQualities.map( q => <li className={styles.paint} key={q.id}> {q.qualitie} </li>);

  return (

    <div className="App">
      <div className={styles.container}>

        <MyName/>
        <div><ul>{newNameQualities}</ul> </div>
        <Message/>
      </div>
    </div>
  );
};


export default App;
