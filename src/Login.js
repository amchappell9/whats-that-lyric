import React from 'react';
import styled from 'styled-components';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

const LoginContainer = styled.div`
  color: var(--magenta);

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-6);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    margin-top: var(--spacing-5);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainLogo = styled.h1`
  font-size: var(--text-very-large);
  font-weight: bold;

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-2xl);
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    font-size: var(--text-5xl);
  }
`;

const LoginButton = styled.button`
  color: var(--magenta);
  border: 4px solid var(--magenta);
  background-color: inherit;

  font-size: var(--text-2xl);
  font-weight: bold;
  padding: var(--spacing-3) var(--spacing-6);

  display: inline-block;
  text-align: center;
  background-image: none;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    color: var(--background-grey);
    background-color: var(--magenta);
    border: 4px solid var(--background-grey);
  }

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-l);
  }
`;

const Login = props => {
  return (
    <LoginContainer>
      <div>
        <LogoContainer>
          <MainLogo>What's That Lyric?</MainLogo>
        </LogoContainer>
        <CenteredFlexContainer>
          <LoginButton onClick={props.handleLogin}>
            Login to Spotify
          </LoginButton>
        </CenteredFlexContainer>
      </div>
    </LoginContainer>
  );
};

export default Login;
