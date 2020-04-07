import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

const TRANSITION_DELAY = process.env.REACT_APP_TRANSITION_DELAY;

const NowPlayingContainer = styled.div`
  color: var(--magenta);

  grid-row: 1;
  grid-column: 1 / 4;
  margin-top: var(--spacing-5);
  padding-bottom: var(--spacing-7);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    grid-column: 1;
    padding-bottom: var(--spacing-4);
    padding-left: var(--spacing-1);
    padding-right: var(--spacing-1);
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    /* grid-column: 1; */
  }
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CenteredText = styled.div`
  text-align: center;
`;

const NowPlayingHeading = styled(motion.h2)`
  color: var(--grey-600);
  font-size: var(--text-3xl);
  font-weight: bold;

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-xl);
  }
`;

const SongName = styled(motion.span)`
  color: var(--magenta);
  font-size: var(--text-4xl);
  font-weight: bold;

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-2xl);
  }
`;

const ArtistName = styled(motion.span)`
  color: var(--magenta);
  font-size: var(--text-2xl);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-xl);
  }
`;

const TextContainer = styled.div`
  margin-bottom: var(--spacing-2);
`;

const NowPlaying = ({ nowPlaying }) => {
  return (
    <NowPlayingContainer>
      <CenteredDiv>
        <CenteredText>
          <TextContainer>
            <NowPlayingHeading
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                transition: { delay: 1 * TRANSITION_DELAY },
                y: 0
              }}
            >
              Now Playing:
            </NowPlayingHeading>
          </TextContainer>
          <TextContainer>
            <SongName
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                transition: { delay: 2 * TRANSITION_DELAY },
                y: 0
              }}
            >
              {nowPlaying.songName}
            </SongName>
          </TextContainer>
          <TextContainer>
            <ArtistName
              initial={{ opacity: 0, y: -50 }}
              animate={{
                opacity: 1,
                transition: { delay: 3 * TRANSITION_DELAY },
                y: 0
              }}
            >
              By{' '}
              {Array.prototype.map
                .call(nowPlaying.artists, artist => artist.name)
                .toString()
                .split(',')
                .join(', ')}
            </ArtistName>
          </TextContainer>
        </CenteredText>
      </CenteredDiv>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
