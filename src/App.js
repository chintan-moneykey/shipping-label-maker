import React, { Component } from "react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import steps from "./features/shipping-label-maker/steps/StepIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="ui center aligned container">
          <h1 class="ui header">Shipping Label Maker</h1>
        </div>
        <Wizard wizardContext={LabelSchema} steps={steps} />
      </div>
    );
  }
}

export default App;
