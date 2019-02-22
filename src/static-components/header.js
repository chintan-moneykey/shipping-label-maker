import React from "react";
import { Container, Header } from "semantic-ui-react";

const header = props => {
  return (
    <Container textAlign="center">
      <Header as="h1" style={{ padding: "40px 0" }}>
        Shipping Label Maker
      </Header>
    </Container>
  );
};

export default header;
