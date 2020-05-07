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
          <span className={styles.environmentItem}>Classic </span>
          <input checked={this.state.pressedClassic} name="theme" onClick={this.changeStyleClassic} onChange={this.onChangeStyle} value={this.state.environmentValue} type="radio"/>
        </div>
       <div>
         <span className={styles.environmentItem}>Black </span>
         <input checked={this.state.pressedBlack} name="theme" onClick={this.changeStyleBlack} onChange={this.onChangeStyle} value={this.state.environmentValue} type="radio"/>
       </div>



      </div>
    )
  }

}

export default Environment;