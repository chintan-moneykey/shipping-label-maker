import React, { Component } from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import ContainerStyles from "../../../app-styles/ContainerStyles";
import ButtonContainerStyles from "../../../app-styles/ButtonContainerStyles";

export default class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: this.props.wizardContext,
      shippingOption: " ",
      shippingTotal: 0
    };

    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {
    this.getShippingOption();
    this.getShippingCost();
  }

  getShippingOption = () => {
    const option =
      this.state.wizardContext.shippingOption === "1" ? "Ground" : "Express";

    this.setState({ shippingOption: option });
  };

  getShippingCost = () => {
    const { wizardContext } = this.state;
    const weight = wizardContext.weight;
    const shippingOption = wizardContext.shippingOption;

    const shippingRate = 0.4,
      shippingCost =
        weight *
        shippingRate *
        (shippingOption === shippingOption.ground ? 1 : 1.5);

    const shippingTotal = shippingCost.toFixed(2);
    this.setState({ shippingTotal });
  };

  confirm() {
    this.props.onAction(this.state);
  }

  render() {
    const { wizardContext } = this.state;
    return (
      <Container>
        <ContainerStyles>
          <Container>
            <Segment.Group>
              <Segment>From:</Segment>
              <Segment.Group>
                <Segment>{wizardContext.from.name}</Segment>
                <Segment>{wizardContext.from.street}</Segment>
                <Segment.Group horizontal>
                  <Segment>{wizardContext.from.city}</Segment>
                  <Segment>{wizardContext.from.state}</Segment>
                  <Segment>{wizardContext.from.zip}</Segment>
                </Segment.Group>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>To:</Segment>
              <Segment.Group>
                <Segment>{wizardContext.to.name}</Segment>
                <Segment>{wizardContext.to.street}</Segment>
                <Segment.Group horizontal>
                  <Segment>{wizardContext.to.city}</Segment>
                  <Segment>{wizardContext.to.state}</Segment>
                  <Segment>{wizardContext.to.zip}</Segment>
                </Segment.Group>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>Weight:</Segment>
              <Segment.Group>
                <Segment>{wizardContext.weight} lbs</Segment>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>Shipping Method:</Segment>
              <Segment.Group>
                <Segment>{this.state.shippingOption}</Segment>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group style={{ fontWeight: "bold" }}>
              <Segment>Shipping Total:</Segment>
              <Segment.Group>
                <Segment>${this.state.shippingTotal}</Segment>
              </Segment.Group>
            </Segment.Group>
          </Container>
        </ContainerStyles>
        <ButtonContainerStyles>
          <Button primary onClick={this.confirm} style={{ marginTop: "20px" }}>
            Submit Info
          </Button>
        </ButtonContainerStyles>
      </Container>
    );
  }
}
