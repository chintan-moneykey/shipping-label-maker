import React, { Component } from "react";
import { Container, Header, Divider, Form, Button } from "semantic-ui-react";

export class StepOneSenderDetails extends Component {
  render() {
    const { onAction } = this.props;

    return (
      <Container
        style={{
          border: "solid",
          borderWidth: "0.5px",
          borderColor: "grey",
          borderRadius: "5px",
          padding: "15px"
        }}
      >
        <Header as="h2">Enter Sender's Details</Header>
        <Divider />
        <Form>
          <Form.Field>
            <label>Name:</label>
            <input
              placeholder="Enter full name"
              id="name"
              step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Street Address:</label>
            <input
              placeholder="Enter street address"
              id="street"
              step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.street}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="City"
              placeholder="Enter city"
              id="city"
              step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.city}
            />
            <Form.Input
              fluid
              label="State"
              placeholder="Enter state"
              id="state"
              step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.state}
            />
            <Form.Input
              fluid
              label="Zip Code"
              placeholder="Enter zip code"
              id="zip"
              step="from"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.zip}
            />
          </Form.Group>
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

StepOneSenderDetails.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};

export default StepOneSenderDetails;
