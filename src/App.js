import React from 'react';
import './App.css';
import Message from "./components/Message/Message";
import MyName from "./components/MyName/MyName";
import Qualities from "./components/Qualities/Qualities";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import {HashRouter, Route} from "react-router-dom";
import Enumerator from "./components/Enumerator/Enumerator";
import Loader from "./components/Loader/Loader";
import {connect} from "react-redux";
import {setLoading} from "./redux/loading-reducer";
import Environment from "./components/Environment/Environment";
import styles from "./Container.module.css"

class App extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.setLoading(false)
    }, 3000)
  }


  state = {
    nameQualities: [
      {qualitie: "Punctual", id: "1"},
      {qualitie: "Sportsman", id: "2"},
      {qualitie: "Сonfident", id: "3"}
    ],

  }



  render() {
    let choiceRenderComponent = this.props.loading ? <Loader/> : <div className="App">
      <div className={styles[this.props.style]}>
        <NavBar/>
        <MyName/>
        <Qualities nameQualities={this.state.nameQualities}/>
        <Message/>
        <Route path="/environment" render={() => <Environment/>}/>
        <Route path="/form" render={() => <Form/>}/>
        <Route path="/enumerator" render={() => <Enumerator/>}/>
      </div>
    </div>

    return (
      <HashRouter>
        {choiceRenderComponent}
      </HashRouter>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    loading: state.loadingPage.loading,
    style: state.settingPage.style
  }
}

export default connect(mapStateToProps, {setLoading})(App)