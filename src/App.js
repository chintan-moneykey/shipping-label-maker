import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import Header from "./static-components/header";
import steps from "./features/shipping-label-maker/steps/StepIndex";

class App extends Component {
  render() {
    return (
      <Container>
        <Wizard wizardContext={LabelSchema} header={Header} steps={steps} />
      </Container>
    );
  }
}

export default App;
