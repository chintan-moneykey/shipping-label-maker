import React, { Component } from "react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import Steps from "./features/shipping-label-maker/steps/StepIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Page</h1>
        <Wizard wizardContext={LabelSchema} steps={Steps} />
      </div>
    );
  }
}

export default App;
