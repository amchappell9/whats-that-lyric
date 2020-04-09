import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import W_ICON from './svgs';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;

const StyledMainContainer = styled(motion.div)`
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
  margin-bottom: var(--spacing-4);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    margin-bottom: var(--spacing-1);
  }
`;

const StyledLowerContainer = styled(StyledContainer)`
  margin-top: var(--spacing-3);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    padding: 0 var(--spacing-2);
  }
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    transform: scale(0.8);
  }
`;

const StyledSpinner = styled(motion.div)`
  transform: scale(0.4);
`;

const StyledSubText = styled.span`
  color: var(--grey-500);
  display: block;
  font-size: var(--text-l);
  text-align: center;
`;

const Loading = () => {
  return (
    <StyledMainContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1
      }}
    >
      <StyledInnerContainer>
        <StyledUpperContainer>
          <StyledSpinnerContainer className='StyledSpinnerContainer'>
            <StyledSpinner
              animate={{ scale: 0.8 }}
              transition={{ yoyo: Infinity, duration: 1 }}
            >
              <W_ICON />
            </StyledSpinner>
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
