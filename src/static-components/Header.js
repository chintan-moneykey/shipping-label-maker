import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const Header = props => {
  return (
    <HeaderStyles>
      <Container>
        <h1 className="ui header" style={{ padding: "40px 0" }}>
          Shipping Label Maker
        </h1>
      </Container>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.div``;

export default Header;
