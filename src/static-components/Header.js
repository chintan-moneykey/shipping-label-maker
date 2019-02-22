import React from "react";
import { Container } from "semantic-ui-react";

const Header = props => {
  return (
    <Container textAlign="center">
      <h1 className="ui header" style={{ padding: "40px 0" }}>
        Shipping Label Maker
      </h1>
    </Container>
  );
};

export default Header;
