import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";
import ContainerStyles from "../../../app-styles/ContainerStyles";

export class GetWeight extends Component {
  render() {
    const { onAction } = this.props;
    const { weight } = this.props.wizardContext;

    return (
      <ContainerStyles>
        <Container>
          <Header as="h2">Enter the weight:</Header>
          <Divider />
          <Form>
            <Form.Field>
              <label>Weight:</label>
              <input
                placeholder="Enter weight in lbs"
                id="weight"
                type="text"
                onChange={onAction}
                value={weight}
              />
            </Form.Field>
          </Form>
        </Container>
      </ContainerStyles>
    );
  }
}

export default GetWeight;
