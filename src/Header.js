import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 1em;
  border-top: 4px solid var(--magenta);
  padding: 20px;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
}
`;

const StyledLogo = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: var(--magenta);
`;

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <StyledHeader>
      <div className='container mx-auto pt-5 text-magenta'>
        {isLoggedIn && (
          <StyledLogoContainer>
            <div>
              <StyledLogo>What's That Lyric?</StyledLogo>
            </div>
            <StyledLogoutContainer className='text-right text-xl mt-4'>
              <StyledLogoutButton
                onClick={handleLogout}
                className='text-magenta'
              >
                Logout
              </StyledLogoutButton>
            </StyledLogoutContainer>
          </StyledLogoContainer>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
