import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import Header from "./static-components/Header";
import ShippingLabelMaker from "./features/shipping-label-maker/ShippingLabelMaker";

import steps from "./features/shipping-label-maker/steps/StepIndex";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishedLabel: false
    };

    this.createFinalLabel = this.createFinalLabel.bind(this);
  }

  createFinalLabel(finalLabel) {
    this.setState({
      finishedLabel: true,
      finalLabel
    });
  }

  render() {
    return (
      <Container style={{ paddingBottom: "100px" }}>
        {this.state.finishedLabel ? (
          <ShippingLabelMaker finalLabel={this.state.finalLabel} />
        ) : (
          <Wizard
            wizardContext={LabelSchema}
            header={Header}
            steps={steps}
            onComplete={this.createFinalLabel}
          />
        )}
      </Container>
    );
  }
}

export default App;
