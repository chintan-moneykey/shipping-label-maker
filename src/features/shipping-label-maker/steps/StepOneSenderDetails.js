import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";

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
              id="from"
              field="name"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Street Address:</label>
            <input
              placeholder="Enter current street address"
              id="from"
              field="street"
              type="text"
              onChange={onAction}
              value={this.props.wizardContext.from.street}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>City:</label>
              <input
                placeholder="Enter current city"
                id="from"
                field="city"
                type="text"
                onChange={onAction}
                value={this.props.wizardContext.from.city}
              />
            </Form.Field>
            <Form.Field>
              <label>State:</label>
              <input
                placeholder="Enter current state"
                id="from"
                field="state"
                type="text"
                onChange={onAction}
                value={this.props.wizardContext.from.state}
              />
            </Form.Field>
            <Form.Field>
              <label>Zip Code:</label>
              <input
                placeholder="Enter current zip code"
                id="from"
                field="zip"
                type="text"
                onChange={onAction}
                value={this.props.wizardContext.from.zip}
              />
            </Form.Field>
          </Form.Group>
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
