import React, { Component } from "react";

var styleStart = {
  backgroundColor: "green",
  border: "none",
  color: "black",
  borderRadius: "15px",
  padding: "15px 30px"
};

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsMs: this.props.starterSeconds,
      status: false
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.state.status
        ? this.setState({ secondsMs: this.state.secondsMs + 1000 }) &&
          this.conversion()
        : clearInterval(this.state.secondsMs);
    }, 1000);
  }

  start = () => {
    this.setState({ status: !this.state.status });
  };
  restart = () => {
    this.setState({ status: false, secondsMs: 0 });
  };

  conversion = () => {
    let Hour = Math.floor((this.state.secondsMs / 3600000) % 24);
    let Minutes = Math.floor((this.state.secondsMs / 60000) % 60);
    let Seconds = Math.floor((this.state.secondsMs / 1000) % 60);
    let result = [];
    result.push(Hour < 10 ? "0" + Hour + " :" : Hour + " :");
    result.push(Minutes < 10 ? "0" + Minutes + " :" : Minutes + " :");
    result.push(Seconds < 10 ? "0" + Seconds : Seconds);

    return result;
  };

  render() {
    return (
      <div>
        <h1 className="countDown">{this.conversion()}</h1>
        <div className="titles">
          <h1>Hours</h1>
          <h1>Minutes</h1>
          <h1>Seconds</h1>
        </div>
        <div className="buttons">
          <button onClick={this.start} style={styleStart}>
            {this.state.status ? "Stop" : "Start"}
          </button>
          <button onClick={this.restart} style={styleStart}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
