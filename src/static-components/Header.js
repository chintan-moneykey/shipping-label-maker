import React from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";

const Header = props => {
  return (
    <HeaderStyles>
      <Container>
        <h1 className="ui header" id="title">
          Shipping Label Maker
        </h1>
      </Container>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.div`
  background-color: #ffcb02;
  padding: 40px 0;

  #title {
    margin-left: 20px;
    color: #db3214;
    font-family: "Faster One", cursive;
    font-size: 42px;
    font-weight: normal;
  }
`;

export default Header;
