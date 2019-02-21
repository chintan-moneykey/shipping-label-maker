import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import steps from "./features/shipping-label-maker/steps/StepIndex";

class App extends Component {
  render() {
    return (
      <Container>
        <Container textAlign="center">
          <Header as="h1" style={{ padding: "40px 0" }}>
            Shipping Label Maker
          </Header>
        </Container>
        <Wizard wizardContext={LabelSchema} steps={steps} />
      </Container>
    );
  }
}

export default App;
