import React from "react";
import styles from "./Environment.module.css"
import {connect} from "react-redux";
import {theme} from "../../redux/settings-reducer";


class Environment extends React.Component {

  state = {
    checkedValue: true,
  }


  onChangeStyleClassic = (e) => {
    this.props.theme(this.props.themeClassic)
    this.setState({checkedValue: e.currentTarget.checked})
  }

  onChangeStyleBlack = (e) => {
    this.props.theme(this.props.themeBlack)
    this.setState({checkedValue: e.currentTarget.checked})
  }


  render() {

    return (
      <div className={styles.environment}>
        <h3>Выберите тему:</h3>
        <div>
          <label htmlFor="Classic">
            <span className={styles.environmentItem}>Classic </span>
            <input
              id="Classic"
              checked={this.props.style === this.props.themeClassic? this.state.checkedValue: !this.state.checkedValue}
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
              checked={this.props.style === this.props.themeBlack? this.state.checkedValue: !this.state.checkedValue}
              name="theme"
              onChange={this.onChangeStyleBlack}
              type="radio"/>
          </label>
        </div>
      </div>
    )
  }

}
 let mapStateToProps = (state) => {
  return {
    themeClassic: state.settingPage.themeClassic,
    themeBlack: state.settingPage.themeBlack,
    style: state.settingPage.style
  }
 }


export default connect(mapStateToProps,{theme})(Environment) ;