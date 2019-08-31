import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  color: var(--magenta);

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMessage = styled.span`
  font-size: var(--text-2xl);
  font-weight: bold;
`;

const NothingPlaying = () => {
  return (
    <StyledContainer className='container mx-auto mt-4'>
      <div className='text-magenta'>
        <StyledMessage>Nothing Playing :(</StyledMessage>
      </div>
    </StyledContainer>
  );
};

export default NothingPlaying;
