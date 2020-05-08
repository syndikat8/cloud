import React from "react";
import styles from "./Environment.module.css"
import {connect} from "react-redux";
import {theme} from "../../redux/settings-reducer";
import {Theme_black, Theme_classic} from "../../styles/styles";


class Environment extends React.Component {

  state = {
    checkedOn: true,
    checkedOff: false,
    // environmentValue: false
  }

  // onChangeStyle = (e) => {
  //   alert(e.currentTarget.checked)
  //   this.setState({environmentValue: e.currentTarget.checked})
  // }

  changeStyleClassic = () => {
    this.props.theme(Theme_classic)
    this.setState({
      checkedOn:true,
      checkedOff:false,
    })
  }
  changeStyleBlack = () => {
    this.props.theme(Theme_black)
    this.setState({
      checkedOn:false,
      checkedOff: true,
    })
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
              checked={this.state.checkedOn}
              name="theme"
              onClick={this.changeStyleClassic}
              // onChange={this.onChangeStyle}
              type="radio"/>
          </label>
        </div>
        <div>
          <label htmlFor="Black">
            <span className={styles.environmentItem}>Black </span>
            <input
              id="Black"
              checked={this.state.checkedOff}
              name="theme"
              onClick={this.changeStyleBlack}
              // onChange={this.onChangeStyle}
              type="radio"/>
          </label>
        </div>
      </div>
    )
  }

}



export default connect(null,{theme})(Environment) ;