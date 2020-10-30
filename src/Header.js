import React from "react";
import styled from "styled-components";

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

const StyledHeader = styled.header`
  grid-column: 1 / 4;
  grid-row: 1;
  border-top: 4px solid var(--magenta);
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-7);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    padding: var(--spacing-1) var(--spacing-3);
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    padding: var(--spacing-3) var(--spacing-3);
  }
`;

const StyledLogoutContainer = styled.div`
  text-align: right;
  margin-top: var(--spacing-1);
`;

const StyledLogoutButton = styled.div`
  color: var(--magenta);
  border: 2px solid var(--magenta);

  display: inline-block;
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  padding: var(--spacing-1) var(--spacing-3);
  line-height: 1.42857143;

  :hover {
    color: var(--background-grey);
    background-color: var(--magenta);
    border: 4px solid var(--background-grey);
  }

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-m);
  }
`;

const StyledLogo = styled.h1`
  font-size: var(--text-3xl);
  font-weight: bold;
  color: var(--magenta);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-l);
    padding-top: var(--spacing-3);
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    padding-top: var(--spacing-1);
  }
`;

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <StyledHeader className="StyledHeader">
      {isLoggedIn && (
        <StyledLogoContainer className="StyledLogoContainer">
          <div>
            <StyledLogo>What's That Lyric?</StyledLogo>
          </div>
          <StyledLogoutContainer className="StyledLogoutContainer">
            <StyledLogoutButton onClick={handleLogout}>
              Logout
            </StyledLogoutButton>
          </StyledLogoutContainer>
        </StyledLogoContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
