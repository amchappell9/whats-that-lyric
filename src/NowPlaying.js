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

const NowPlaying = props => {
  return (
    <NowPlayingContainer className='NowPlayingContainer'>
      <CenteredDiv>
        <CenteredText>
          <TextContainer className='flex justify-center mt-12'>
            <NowPlayingHeading className='text-grey text-3xl'>
              Now Playing:
            </NowPlayingHeading>
          </TextContainer>
          <TextContainer className='flex justify-center'>
            <SongName className='text-magenta font-bold text-5xl'>
              {props.nowPlaying.songName}
            </SongName>
          </TextContainer>
          <TextContainer className='flex justify-center'>
            <ArtistName className='text-magenta font-bold text-3xl'>
              By{' '}
              {Array.prototype.map
                .call(props.nowPlaying.artists, artist => artist.name)
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
