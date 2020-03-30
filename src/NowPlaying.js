import React from 'react';
import styled from 'styled-components';

const NowPlayingContainer = styled.div`
  color: var(--magenta);

  grid-row: 1;
  grid-column: 1 / 4;
  margin-top: var(--spacing-5);
  padding-bottom: var(--spacing-7);
`;

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CenteredText = styled.div`
  text-align: center;
  //   margin-bottom: 20px;
`;

const NowPlayingHeading = styled.h2`
  color: var(--grey-600);
  font-size: var(--text-3xl);
  font-weight: bold;
  //   margin-bottom: 10px;
`;

const SongName = styled.span`
  color: var(--magenta);
  font-size: var(--text-4xl);
  font-weight: bold;
  //   margin-bottom: 10px;
`;

const ArtistName = styled.span`
  color: var(--magenta);
  font-size: var(--text-2xl);
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
