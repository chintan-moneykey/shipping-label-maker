import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";
import ContainerStyles from "../../../app-styles/ContainerStyles";

export class GetShippingOption extends Component {
  render() {
    const { onAction } = this.props;

    return (
      <ContainerStyles>
        <Container>
          <Header as="h2">Enter the shipping option:</Header>
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
      </ContainerStyles>
    );
  }
}

export default GetShippingOption;
