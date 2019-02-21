import React, { Component } from "react";
import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Page</h1>
        <Wizard wizardContext={LabelSchema} />
      </div>
    );
  }
}

export default App;
