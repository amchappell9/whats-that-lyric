import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';

const SongLinksContainer = styled.div`
  grid-row: 2;
  grid-column: 2;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);
`;

const SongLink = styled.a`
  color: var(--magenta);
  border: 4px solid var(--magenta);
  background-color: inherit;

  font-size: var(--text-xl);
  font-weight: bold;
  padding: var(--spacing-3) var(--spacing-6);
  margin-bottom: var(--spacing-4);
  text-decoration: none;

  display: block;
  text-align: center;
  // vertical-align: middle;
  background-image: none;
  white-space: nowrap;
  cursor: pointer;

  :hover {
    color: var(--background-grey);
    background-color: var(--magenta);
    border: 4px solid var(--background-grey);
    text-decoration: underline;
  }
`;

const SongLinks = ({ geniusHref, geniusAlbumHref }) => {
  return (
    <SongLinksContainer>
      <SongLink href={geniusHref} target='_blank'>
        Genius Lyrics
      </SongLink>

      <SongLink href={geniusAlbumHref} target='_blank'>
        Album
      </SongLink>
    </SongLinksContainer>
  );
};

// SongLinks.propTypes = {

// }

export default SongLinks;
