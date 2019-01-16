import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};

  addSecond = () => {
    console.log("Refresh clock");
    const now = new Date();
    const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    const timeColor = time.map(this.toHex).join("");
    let textColor = "white";
    console.log(time)
    // Source https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color/3943023
    if (time[0] * 0.299 + time[1] * 0.587 + time[2] * 0.114 > 186) {
      textColor = "black";
    }
    this.setState({
      timeColor,
      textColor
    });
  };

  toHex = number => {
    let hexString = number.toString(16).toUpperCase();
    if (hexString.length % 2) {
      hexString = "0" + hexString;
    }
    return hexString;
  };

  componentWillMount() {
    this.addSecond();
    setInterval(this.addSecond, 1000);
  }

  render() {
    console.log("state", this.state);
    const { timeColor, textColor } = this.state;
    return (
      <div className="App" style={{ backgroundColor: "#" + timeColor }}>
        <div className="clock" style={{ color: textColor }}>
          #{timeColor}
        </div>
      </div>
    );
  }
}

export default App;
