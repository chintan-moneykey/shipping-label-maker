import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";

export class GetReceiverAddress extends Component {
  render() {
    const { onAction } = this.props;
    const recipientDetails = this.props.wizardContext.to;

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
        <Header as="h2">Enter Recipient's Details</Header>
        <Divider />
        <Form>
          <Form.Field>
            <label>Name:</label>
            <input
              placeholder="Enter full name"
              id="to"
              field="name"
              type="text"
              onChange={onAction}
              value={recipientDetails.name}
            />
          </Form.Field>
          <Form.Field>
            <label>Street Address:</label>
            <input
              placeholder="Enter street address"
              id="to"
              field="street"
              type="text"
              onChange={onAction}
              value={recipientDetails.street}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>City:</label>
              <input
                placeholder="Enter city"
                id="to"
                field="city"
                type="text"
                onChange={onAction}
                value={recipientDetails.city}
              />
            </Form.Field>
            <Form.Field>
              <label>State:</label>
              <input
                placeholder="Enter state"
                id="to"
                field="state"
                type="text"
                onChange={onAction}
                value={recipientDetails.state}
              />
            </Form.Field>
            <Form.Field>
              <label>Zip Code:</label>
              <input
                placeholder="Enter zip code"
                id="to"
                field="zip"
                type="text"
                onChange={onAction}
                value={recipientDetails.zip}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

GetReceiverAddress.defaultProps = {
  wizardContext: {},
  onAction: () => {}
};

export default GetReceiverAddress;
