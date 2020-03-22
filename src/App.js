import React from 'react';
import Message from "./components/Message/Message";
import MyName from "./components/MyName/MyName";
import styles from "./Container.module.css";
import Qualities from "./components/Qualities/Qualities";
import Form from "./components/Form/Form";


const App = () => {
  let nameQualities = [
    {qualitie: "Punctual", id: "1"},
    {qualitie: "Sportsman", id: "2"},
    {qualitie: "Сonfident", id: "3"}
  ];
  return (
    <div className="App">
      <div className={styles.container}>
        <MyName/>
       <Qualities nameQualities={nameQualities} />
        <Message/>
        <Form/>
      </div>
    </div>
  );
};


export default App;
