import React from 'react';
import styled from 'styled-components';
import './SongDescription.scss';

const SongDescriptionContainer = styled.div`
  color: var(--grey-500);

  grid-row: 2;
  grid-column: 1;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);
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
