import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMainContainer = styled.div`
  color: var(--magenta);
  height: 100%;
`;

const StyledInnerContainer = styled.div`
  position: relative;
  top: 30%;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledUpperContainer = styled(StyledContainer)`
  margin-bottom: var(--spacing-6);
`;

const StyledLowerContainer = styled(StyledContainer)`
  margin-top: var(--spacing-5);
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const StyledSpinner = styled(motion.div)`
  width: 80px;
  height: 80px;
  background-color: var(--magenta);
`;

const StyledSubText = styled.span`
  color: var(--grey-500);
  display: block;
  font-size: var(--text-l);
`;

const Loading = () => {
  return (
    <StyledMainContainer className='StyledContainer'>
      <StyledInnerContainer>
        <StyledUpperContainer>
          <StyledSpinnerContainer className='StyledSpinnerContainer'>
            <StyledSpinner
              animate={{ scale: 1.4, rotate: 180 }}
              transition={{ yoyo: Infinity, duration: 1 }}
            />
          </StyledSpinnerContainer>
        </StyledUpperContainer>
        <StyledLowerContainer>
          <StyledSubText>
            Getting the song you're currently listening to...
          </StyledSubText>
        </StyledLowerContainer>
      </StyledInnerContainer>
    </StyledMainContainer>
  );
};

export default Loading;
