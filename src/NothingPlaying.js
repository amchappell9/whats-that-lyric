import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  color: var(--magenta);

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredText = styled.div`
  text-align: center;
`;

const StyledMessage = styled.span`
  font-size: var(--text-3xl);
  font-weight: bold;
  display: block;
  margin-bottom: var(--spacing-4);

  @media (max-width: 375px) {
    font-size: var(--text-2xl);
  }
`;

const StyledSubText = styled.span`
  color: var(--grey-500);
  display: block;
  font-size: var(--text-l);

  @media (max-width: 375px) {
    font-size: var(--text-l);
  }
`;

const NothingPlaying = () => {
  return (
    <StyledContainer>
      <CenteredText>
        <StyledMessage>
          Nothing Playing{' '}
          <span role='img' aria-label='Sad Face'>
            🙁
          </span>
        </StyledMessage>
        <StyledSubText>
          Start playing any song on your Spotify to see song info.
        </StyledSubText>
      </CenteredText>
    </StyledContainer>
  );
};

export default NothingPlaying;
