import React, { Component } from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import ContainerStyles from "../../app-styles/ContainerStyles";

export default class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props);
    this.state = props.finalLabel;
  }

  render() {
    const finalLabel = this.state.wizardContext;

    return (
      <ContainerStyles>
        <Container>
          <Container
            style={{
              margin: "10vh"
            }}
          >
            <Segment.Group>
              <Segment>From:</Segment>
              <Segment.Group>
                <Segment>{finalLabel.from.name}</Segment>
                <Segment>{finalLabel.from.street}</Segment>
                <Segment.Group horizontal>
                  <Segment>{finalLabel.from.city}</Segment>
                  <Segment>{finalLabel.from.state}</Segment>
                  <Segment>{finalLabel.from.zip}</Segment>
                </Segment.Group>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group>
              <Segment>To:</Segment>
              <Segment.Group>
                <Segment>{finalLabel.to.name}</Segment>
                <Segment>{finalLabel.to.street}</Segment>
                <Segment.Group horizontal>
                  <Segment>{finalLabel.to.city}</Segment>
                  <Segment>{finalLabel.to.state}</Segment>
                  <Segment>{finalLabel.to.zip}</Segment>
                </Segment.Group>
              </Segment.Group>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment>Weight: {finalLabel.weight} lbs</Segment>
              <Segment>Shipping Method: {this.state.shippingOption}</Segment>
              <Segment style={{ fontWeight: "bold" }}>
                Shipping Total: ${this.state.shippingTotal}
              </Segment>
            </Segment.Group>
          </Container>
        </Container>
        <Button onClick={() => window.print()} style={{ marginTop: "20px" }}>
          Print Label
        </Button>
      </ContainerStyles>
    );
  }
}
