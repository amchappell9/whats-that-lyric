import React from 'react';
import styled from 'styled-components';
import './SongDescription.scss';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

const SongDescriptionContainer = styled.div`
  color: var(--grey-500);

  grid-row: 2;
  grid-column: 1;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    grid-column: 1;
    grid-row: 3;
    min-height: 0px;
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-column: 1 / 4;
    grid-row: 3;
    min-height: 0px;
  }
`;

const SongDescription = ({ description: { html: descriptionHTML } }) => {
  return (
    <SongDescriptionContainer>
      <div
        className='songDescriptionContainer'
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      />
    </SongDescriptionContainer>
  );
};

SongDescription.propTypes = {};

export default SongDescription;
