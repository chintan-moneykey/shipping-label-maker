import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";
import ContainerStyles from "../../../app-styles/ContainerStyles";

export class GetSenderAddress extends Component {
  render() {
    const { onAction } = this.props;
    const senderDetails = this.props.wizardContext.from;

    return (
      <ContainerStyles>
        <Container>
          <Header as="h2">Enter the sender's address:</Header>
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
                <label>Zip:</label>
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
      </ContainerStyles>
    );
  }
}

export default GetSenderAddress;
