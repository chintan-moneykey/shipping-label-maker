import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";

export class GetSenderAddress extends Component {
  render() {
    const { onAction } = this.props;
    const senderDetails = this.props.wizardContext.from;

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
              value={senderDetails.name}
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
              value={senderDetails.street}
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
                value={senderDetails.city}
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
                value={senderDetails.state}
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
                value={senderDetails.zip}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

GetSenderAddress.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};

export default GetSenderAddress;
