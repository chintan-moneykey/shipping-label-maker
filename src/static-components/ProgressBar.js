import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

export class ProgressBar extends Component {
  render() {
    const progress = this.props.currentStep;

    return (
      <div style={{ marginTop: "20px" }}>
        <Progress
          color={progress > 4 ? "green" : "blue"}
          value={progress}
          total="5"
          progress="ratio"
        />
      </div>
    );
  }
}

export default ProgressBar;
