import React from 'react';
import './App.css';
import Message from "./components/Message/Message";
import MyName from "./components/MyName/MyName";
import styles from "./Container.module.css";
import Qualities from "./components/Qualities/Qualities";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import {HashRouter, Route} from "react-router-dom";
import Enumerator from "./components/Enumerator/Enumerator";


const App = () => {
  let nameQualities = [
    {qualitie: "Punctual", id: "1"},
    {qualitie: "Sportsman", id: "2"},
    {qualitie: "Сonfident", id: "3"}
  ];
  return (

    <HashRouter>
      <div className="App">
        <div className={styles.container}>
          <NavBar/>
          <MyName/>
          <Route path="/all" render={() => <Qualities nameQualities={nameQualities}/> }/>
          <Message/>
          <Route path="/form" render={() => <Form /> }/>
          <Route path="/enumerator" render={() => <Enumerator /> }/>
        </div>
      </div>
    </HashRouter>
  );
};


export default App;
