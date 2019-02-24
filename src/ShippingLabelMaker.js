import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Wizard from "./core/components/wizard/Wizard";
import LabelSchema from "./static-components/LabelSchema";
import Header from "./static-components/Header";
import ShippingLabel from "./features/shipping-label-maker/ShippingLabel";

import steps from "./features/shipping-label-maker/steps/StepIndex";

class ShippingLabelMaker extends Component {
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
          <ShippingLabel finalLabel={this.state.finalLabel} />
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

export default ShippingLabelMaker;
