import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import ButtonContainerStyles from "../app-styles/ButtonContainerStyles";

const Navigation = props => (
  <Container
    style={{
      marginTop: "20px"
    }}
  >
    <ButtonContainerStyles>
      {props.currentStep < 2 ? null : (
        <Button icon labelPosition="left" onClick={props.previousStep}>
          <Icon name="left arrow" />
          Previous
        </Button>
      )}
      <Button primary icon labelPosition="right" onClick={props.nextStep}>
        Next
        <Icon name="right arrow" />
      </Button>
    </ButtonContainerStyles>
  </Container>
);

export default Navigation;
