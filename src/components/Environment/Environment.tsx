import React, {ChangeEvent} from "react";
import styles from "./Environment.module.css"
import {connect} from "react-redux";
import {changeCutout, changeError, changeIsDone, changeUnError, setStatus, theme} from "../../redux/settings-reducer";
import Loader from "../Loader/Loader";
import {AppStateType} from "../../redux/store";

type StateType = {
  checkedValue: boolean
}

type MapDispatchPropsType = {
  theme: (themeClassic: string) => void
  changeIsDone: (isDone: boolean) => void
  changeCutout: (cutout: boolean) => void
  setStatus: (isDone: boolean) => void
  changeUnError: (unError: boolean) => void
  changeError: (error: boolean) => void
}

type MapStatePropsType = {
  themeClassic: string
  themeBlack: string
  style: string
  isDone: boolean
  cutout: boolean
  unError: boolean
  error: boolean
}

type PropsType = MapDispatchPropsType & MapStatePropsType

class Environment extends React.Component<PropsType, StateType> {

  state: StateType = {
    checkedValue: true
  }

  onChangeStyleClassic = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.theme(this.props.themeClassic)
    this.setState({checkedValue: e.currentTarget.checked})
  }

  onChangeStyleBlack = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.theme(this.props.themeBlack)
    this.setState({checkedValue: e.currentTarget.checked})
  }

  onChangeCheked = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.changeIsDone(e.currentTarget.checked)
  }

  onButtonClick = () => {
    this.props.changeCutout(true)
    this.props.setStatus(this.props.isDone)
  }


  onUnerrorPointer = () => {
    this.props.changeUnError(false)
  }

  onErrorPointer = () => {
    this.props.changeError(false)
  }

  render() {


    return (
      <div className={styles.environment}>
        {this.props.unError
          ? <span
            className={styles.unError}
            onPointerEnter={this.onUnerrorPointer}>Поздравляю, запрос успешен!</span>
          : null
        }
        {this.props.error
          ? <span
            className={styles.error}
            onPointerEnter={this.onErrorPointer}>К сожалению возникла ошибка:(</span>
          : null
        }
        <h3>Выберите тему:</h3>
        <div>
          <label htmlFor="Classic">
            <span className={styles.environmentItem}>Classic </span>
            <input
              id="Classic"
              checked={this.props.style === this.props.themeClassic ? this.state.checkedValue : !this.state.checkedValue}
              name="theme"
              onChange={this.onChangeStyleClassic}
              type="radio"/>
          </label>
        </div>
        <div>
          <label htmlFor="Black">
            <span className={styles.environmentItem}>Black </span>
            <input
              id="Black"
              checked={this.props.style === this.props.themeBlack ? this.state.checkedValue : !this.state.checkedValue}
              name="theme"
              onChange={this.onChangeStyleBlack}
              type="radio"/>
          </label>
        </div>
        {this.props.cutout ? <span><Loader/></span> : null}
        <div className={styles.environmentElement}>
          <input type="checkbox" checked={this.props.isDone} onChange={this.onChangeCheked}/>
          <button
            disabled={this.props.cutout}
            onClick={this.onButtonClick}>send
          </button>
        </div>
      </div>
    )
  }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    themeClassic: state.settingPage.themeClassic,
    themeBlack: state.settingPage.themeBlack,
    style: state.settingPage.style,
    isDone: state.settingPage.isDone,
    cutout: state.settingPage.cutout,
    unError: state.settingPage.unError,
    error: state.settingPage.error,
  }
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
  theme,
  changeIsDone,
  setStatus,
  changeCutout,
  changeUnError,
  changeError
})(Environment);