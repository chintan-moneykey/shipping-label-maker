import React, { Component } from "react";

export default class StepFiveConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      shippingCost: 0
    };

    // this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {
    this.getShippingCost();
  }

  getShippingCost = () => {
    const { wizardContext } = this.state;
    const weight = wizardContext.weight;
    const shippingOption = wizardContext.shippingOption;

    console.log(weight);
    console.log(shippingOption);

    const shippingRate = 0.4,
      shippingCost =
        weight *
        shippingRate *
        (shippingOption === shippingOption.ground ? 1 : 1.5);

    const finalCost = shippingCost.toFixed(2);
    this.setState({ shippingCost: finalCost });
  };

  render() {
    return <div>Dummy text</div>;
  }
}
