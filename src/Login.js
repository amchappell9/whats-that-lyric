import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  color: var(--magenta);

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-top: var(--spacing-7);
`;

const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-6);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainLogo = styled.h1`
  font-size: var(--text-very-large);
  font-weight: bold;
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
  // vertical-align: middle;
  background-image: none;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    color: var(--background-grey);
    background-color: var(--magenta);
    border: 4px solid var(--background-grey);
  }
`;

const Login = props => {
  return (
    <LoginContainer className='loginContainer'>
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
