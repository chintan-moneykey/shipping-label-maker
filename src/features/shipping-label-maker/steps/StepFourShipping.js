import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";

export class StepFourShipping extends Component {
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
        <Header as="h2">Choose Shipping Option</Header>
        <Divider />
        <Form>
          <Form.Group grouped>
            <label>Shipping:</label>
            <Form.Field
              label="Ground"
              control="input"
              type="radio"
              name="htmlRadios"
              onChange={onAction}
              id="shippingOption"
              value="1"
            />
            <Form.Field
              label="Express"
              control="input"
              type="radio"
              name="htmlRadios"
              onChange={onAction}
              id="shippingOption"
              value="2"
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default StepFourShipping;
