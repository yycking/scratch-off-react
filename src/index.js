import React, { Component } from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { points: [] };
    this._onMouseMove = this._onMouseMove.bind(this);
  }

  _onMouseMove(e) {
    this.setState({
      points: [
        ...this.state.points,
        {
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY
        }
      ]
    });
  }

  render() {
    return (
      <svg
        onMouseMove={this._onMouseMove}
        style={{
          backgroundColor: "lightGray"
        }}
      >
        <defs>
          <clipPath id={"svgPath"}>
            {this.state.points.map((point, i) => (
              <circle
                key={i}
                stroke="#000000"
                strokeMiterlimit="10"
                cx={point.x}
                cy={point.y}
                r="40"
              />
            ))}
          </clipPath>
        </defs>
        <image
          href={
            "https://www.w3cplus.com/sites/default/files/blogs/2014/1407/flowers.jpg"
          }
          clipPath="url(#svgPath)"
        />
      </svg>
    );
  }
}

render(<App />, document.getElementById("root"));
