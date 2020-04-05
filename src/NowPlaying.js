import React from 'react';
import styled from 'styled-components';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

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

const NowPlayingHeading = styled.h2`
  color: var(--grey-600);
  font-size: var(--text-3xl);
  font-weight: bold;

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-xl);
  }
`;

const SongName = styled.span`
  color: var(--magenta);
  font-size: var(--text-4xl);
  font-weight: bold;

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    font-size: var(--text-2xl);
  }
`;

const ArtistName = styled.span`
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
            <NowPlayingHeading>Now Playing:</NowPlayingHeading>
          </TextContainer>
          <TextContainer>
            <SongName>{nowPlaying.songName}</SongName>
          </TextContainer>
          <TextContainer>
            <ArtistName>
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
