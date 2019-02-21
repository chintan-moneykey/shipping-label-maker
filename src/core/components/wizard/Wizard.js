import React, { Component } from "react";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      currentStep: 1
    };

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  labelSubmit(finalLabel) {
    this.props.handleSubmit(finalLabel);
  }

  nextStep() {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep + 1
      };
    });
  }

  previousStep() {
    if (this.state.currentStep > 1) {
      this.setState({
        currentStep: this.state.currentStep - 1
      });
    }
  }

  render() {
    return <div />;
  }
}
