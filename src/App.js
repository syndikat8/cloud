import React from 'react';
import Message from "./components/Message/Message";
import MyName from "./components/MyName/MyName";
import styles from "./Container.module.css";

const App = () => {
  return (
    <div className="App">
      <div className={styles.container}>
        <MyName/>
        <Message/>
      </div>
    </div>
  );
};





export default App;
