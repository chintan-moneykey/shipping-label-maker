import React, { Component } from "react";
import { Container, Header, Divider, Form } from "semantic-ui-react";

export class GetWeight extends Component {
  render() {
    const { onAction } = this.props;
    const { weight } = this.props.wizardContext;

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
        <Header as="h2">Enter Weight</Header>
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
    );
  }
}

export default GetWeight;
