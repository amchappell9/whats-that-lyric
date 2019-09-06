import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  grid-column: 1 / 4;
  grid-row: 1;
  // background-color: maroon;
  border-top: 4px solid var(--magenta);
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-7);
`;

const StyledLogoutContainer = styled.div`
  text-align: right;
  text-size: var(--text-xl);
  margin-top: var(--spacing-1);
`;

const StyledLogoutButton = styled.div`
  color: var(--magenta);
  border: 2px solid var(--magenta);

  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  padding: var(--spacing-1) var(--spacing-3);
  font-size: 1em;
  line-height: 1.42857143;

  :hover {
    color: var(--background-grey);
    background-color: var(--magenta);
    border: 4px solid var(--background-grey);
  }
}
`;

const StyledLogo = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: var(--magenta);
`;

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <StyledHeader className='StyledHeader'>
      {isLoggedIn && (
        <StyledLogoContainer className='StyledLogoContainer'>
          <div>
            <StyledLogo>What's That Lyric?</StyledLogo>
          </div>
          <StyledLogoutContainer className='StyledLogoutContainer'>
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
