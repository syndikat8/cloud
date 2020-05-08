import React from "react";
import styles from "./Environment.module.css"


class Environment extends React.Component {

  state = {
    environmentValue: "",
    pressedClassic: true,
    pressedBlack: "",
  }

  onChangeStyle = (e) => {
    this.setState({environmentValue: e.target.value})
  }

  changeStyleClassic = () => {
    this.props.onCLickThemeClssic(this.state.environmentValue)
    this.setState({
      pressedClassic: true,
      pressedBlack: false,
    })
  }
  changeStyleBlack = () => {
    this.props.onCLickThemeBlack(this.state.environmentValue)
    this.setState({
      pressedBlack: true,
      pressedClassic: false
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
            checked={this.state.pressedClassic}
            name="theme"
            onClick={this.changeStyleClassic}
            onChange={this.onChangeStyle}
            value={this.state.environmentValue}
            type="radio"/>
          </label>
        </div>
       <div>
         <label htmlFor="Black">
         <span className={styles.environmentItem}>Black </span>
         <input
           id="Black"
           checked={this.state.pressedBlack}
           name="theme"
           onClick={this.changeStyleBlack}
           onChange={this.onChangeStyle}
           value={this.state.environmentValue}
           type="radio"/>
         </label>
       </div>



      </div>
    )
  }

}

export default Environment;