import React from "react";
import "./score.css";
export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: this.props.teamName,
      counter: 0,
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    if (this.state.counter >= 1) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div
        style={{
          display: "inline-block",
          margin: "18%",
          marginTop: "-1%",
          marginBottom: "-40%",
          height: "100px",
        }}
      >
        <div style={{}}>
          <h1 style={{ color: "white", fontSize: "70px" }}>
            {this.state.teamName}
          </h1>
          <span style={{ color: "white", fontSize: "120px" }}>
            {this.state.counter}
          </span>
        </div>
        <div style={{ marginBottom: "-50%" }}>
          <button onClick={this.increase} className="control-button">
            +
          </button>
          <button onClick={this.decrease} className="control-button">
            -
          </button>
        </div>
      </div>
    );
  }
}
