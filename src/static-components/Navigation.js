import React from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const Navigation = props => (
  <Container
    style={{
      marginTop: "20px"
    }}
  >
    <ButtonContainer>
      {props.currentStep < 2 ? null : (
        <Button icon labelPosition="left" onClick={props.previousStep}>
          <Icon name="left arrow" />
          Go Back
        </Button>
      )}
      <Button primary icon labelPosition="right" onClick={props.nextStep}>
        Next
        <Icon name="right arrow" />
      </Button>
    </ButtonContainer>
  </Container>
);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Navigation;
