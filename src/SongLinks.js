import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

const TRANSITION_DELAY = process.env.REACT_APP_TRANSITION_DELAY;

const SongLinksContainer = styled(motion.div)`
  grid-row: 2;
  grid-column: 2;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-column: 1 / 4;
    grid-row: 2;
    min-height: 0px;
  }

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    grid-column: 1;
    grid-row: 2;
    min-height: 0px;
  }
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

const SongLinks = ({
  songInfo,
  songInfo: { url: geniusHref },
  songInfo: { album }
}) => {
  const FADE_IN_ORDER = 4;

  return (
    <SongLinksContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: FADE_IN_ORDER * TRANSITION_DELAY }
      }}
    >
      <SongLink href={geniusHref} target='_blank'>
        Genius Lyrics
      </SongLink>
      {album !== null ? (
        <SongLink href={album.url} target='_blank'>
          Album
        </SongLink>
      ) : (
        <></>
      )}
    </SongLinksContainer>
  );
};

export default SongLinks;
