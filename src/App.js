import React from 'react';
import './App.css';
import Message from "./components/Message/Message";
import MyName from "./components/MyName/MyName";
import styles from "./Container.module.css";
import Qualities from "./components/Qualities/Qualities";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  let nameQualities = [
    {qualitie: "Punctual", id: "1"},
    {qualitie: "Sportsman", id: "2"},
    {qualitie: "Сonfident", id: "3"}
  ];
  return (

    <BrowserRouter>
      <div className="App">
        <div className={styles.container}>
          <NavBar/>
          <Route path="/all" component={MyName}/>
          <Route path="/all" render={() => <Qualities nameQualities={nameQualities}/> }/>
          <Route path="/all" component={Message}/>
          <Route path="/form" component={Form}/>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
