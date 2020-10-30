import React from "react";
import styled from "styled-components";
import githubLogoLight from "./images/GitHub-Mark-Light-32px.png";

const StyledFooter = styled.footer`
  grid-column: 1 / 4;
  grid-row: 3;
  //   background-color: darkblue;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: var(--spacing-6);

  font-weight: bold;
  /* font-size: var(--text-l); */
  color: var(--grey-600);
`;

const StyledSpan = styled.span`
  margin-right: var(--spacing-2);
`;

const StyledNameLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--magenta);

  &:hover {
    text-decoration: underline;
  }
`;

const StyledImg = styled.img`
  filter: opacity(0.5);
  transition: filter 0.1s;

  &:hover {
    filter: opacity(1);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledSpan>
          Made by{" "}
          <StyledNameLink
            href="https://www.linkedin.com/in/austin-chappell-887580108/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Austin Chappell
          </StyledNameLink>
        </StyledSpan>
        <a
          href="https://github.com/amchappell9/whats-that-lyric"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledImg src={githubLogoLight} alt="Github Repo Link" />
        </a>
      </StyledDiv>
    </StyledFooter>
  );
};

export default Footer;
