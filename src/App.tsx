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
import {AppStateType} from "./redux/store";

type StateType = {
  nameQualities: Array<{
    qualitie: string
    id: string
  }>
}

type MapStatePropsType = {
  loading: boolean
  style: string
}

type MapDispatchPropsType = {
  setLoading: (loading: boolean) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType,StateType> {

  componentDidMount() {
    setTimeout(() => {
      this.props.setLoading(false)
    }, 3000)
  }


  state: StateType = {
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

let mapStateToProps = (state: AppStateType) => {
  return {
    loading: state.loadingPage.loading,
    style: state.settingPage.style
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setLoading})(App)