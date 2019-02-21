import React, { Component } from "react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import steps from "./features/shipping-label-maker/steps/StepIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Shipping Label Maker</h1>
        <Wizard wizardContext={LabelSchema} steps={steps} />
      </div>
    );
  }
}

export default App;
