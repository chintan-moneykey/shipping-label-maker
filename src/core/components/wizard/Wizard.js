import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      currentStep: 1
    };

    this.handleNameAndAddress = this.handleNameAndAddress.bind(this);
  }

  handleRootState(event) {
    const id = event.target.getAttribute("id"),
      value = event.target.value;
    this.setState({
      wizardContext: { ...this.state.wizardContext, [id]: value }
    });
  }

  handleNameAndAddress(event) {
    const id = event.target.getAttribute("id"),
      field = event.target.getAttribute("field"),
      value = event.target.value;

    this.setState(prevState => ({
      ...prevState,
      wizardContext: {
        ...prevState.wizardContext,
        [id]: {
          ...prevState.wizardContext[id],
          [field]: value
        }
      }
    }));
  }

  labelSubmit(finalLabel) {
    this.props.handleSubmit(finalLabel);
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
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired
  // onComplete: PropTypes.func.isRequired
};
