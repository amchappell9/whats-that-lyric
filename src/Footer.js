import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-column: 1 / 4;
  grid-row: 3;
  //   background-color: darkblue;
`;

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
