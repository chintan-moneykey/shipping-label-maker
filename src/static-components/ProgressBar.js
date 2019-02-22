import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

export class ProgressBar extends Component {
  render() {
    return (
      <div>
        <Progress
          success
          value={this.props.currentStep}
          total="5"
          progress="ratio"
        />
      </div>
    );
  }
}

export default ProgressBar;
