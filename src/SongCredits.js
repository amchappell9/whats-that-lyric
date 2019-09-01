import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SongCreditsContainer = styled.div`
  grid-row: 2;
  grid-column: 3;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);
`;

const CreditContainer = styled.div`
  margin-bottom: var(--spacing-4);
`;

const CreditHeading = styled.span`
  color: var(--grey-500);
  font-size: var(--text-l);

  display: block;
  margin-bottom: var(--spacing-1);
`;

const CreditContent = styled.span`
  color: var(--magenta);
  font-size: var(--text-l);
  font-weight: bold;

  display: block;
`;

const CreditContentLink = styled.a`
  color: var(--magenta);
  font-size: var(--text-l);
  font-weight: bold;
  text-decoration: none;

  display: block;

  :hover {
    text-decoration: underline;
  }
`;

const CreditContentLinkInline = styled.a`
  color: var(--magenta);
  font-size: var(--text-l);
  font-weight: bold;
  text-decoration: none;
  margin-right: 5px;

  :hover {
    text-decoration: underline;
  }
`;

const SongCredits = ({ producersArray, album, songRelationships }) => {
  let producerInfo = <></>;
  let albumInfo = <></>;
  let songRelationshipsInfo = <></>;

  if (producersArray.length > 0) {
    producerInfo = (
      <CreditContainer>
        <CreditHeading>Produced By:</CreditHeading>
        {producersArray.map((producer, index) => {
          return (
            <CreditContentLinkInline
              href={producer.url}
              target='_blank'
              key={producer.id}
            >
              {producer.name}
              {producersArray.length !== index + 1 ? ',' : ''}
            </CreditContentLinkInline>
          );
        })}
      </CreditContainer>
    );
  }

  if (album) {
    albumInfo = (
      <CreditContainer>
        <CreditHeading>Album:</CreditHeading>
        <CreditContentLink href={album.url} target='_blank'>
          {album.name}
        </CreditContentLink>
      </CreditContainer>
    );
  }

  return (
    <SongCreditsContainer>
      {producerInfo}
      {albumInfo}
      {songRelationshipsInfo}
    </SongCreditsContainer>
  );
};

// SongCredits.propTypes = {};

export default SongCredits;
