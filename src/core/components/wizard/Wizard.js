import React, { Component } from "react";
import PropTypes from "prop-types";

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
    return (
      <div>
        {React.cloneElement(this.props.steps[this.state.currentStep - 1], {
          onAction: this[
            this.props.steps[this.state.currentStep - 1].props.onAction
          ],
          wizardContext: this.state.wizardContext
        })}
      </div>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};
