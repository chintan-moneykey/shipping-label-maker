import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";

const Navigation = props => (
  <Container
    style={{
      marginTop: "20px"
    }}
  >
    {props.currentStep < 2 ? null : (
      <Button
        icon
        labelPosition="left"
        floated="left"
        onClick={props.previousStep}
      >
        <Icon name="left arrow" />
        Go Back
      </Button>
    )}
    <Button
      primary
      icon
      labelPosition="right"
      floated="right"
      onClick={props.nextStep}
    >
      Next
      <Icon name="right arrow" />
    </Button>
  </Container>
);

export default Navigation;
