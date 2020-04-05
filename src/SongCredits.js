import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import songRelationshipTitles from './SongRelationshipTitles';

const PHONE_BREAKPOINT = process.env.REACT_APP_PHONE_BREAKPOINT;
const TABLET_BREAKPOINT = process.env.REACT_APP_TABLET_BREAKPOINT;

const SongCreditsContainer = styled.div`
  grid-row: 2;
  grid-column: 3;
  min-height: var(--song-info-min-sizing);
  padding: var(--spacing-5);

  @media (max-width: ${PHONE_BREAKPOINT}px) {
    grid-column: 1;
    grid-row: 4;
    min-height: 0px;
  }

  @media (max-width: ${TABLET_BREAKPOINT}px) {
    grid-column: 1 / 4;
    grid-row: 4;
    min-height: 0px;
  }
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

const CreditContentLink = styled.a`
  color: var(--magenta);
  font-size: var(--text-l);
  font-weight: bold;
  text-decoration: none;
  line-height: 1.2;

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
  line-height: 1.2;

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

  if (songRelationships) {
    songRelationshipsInfo = songRelationships.map(relationship => {
      if (typeof songRelationshipTitles[relationship.type] !== 'undefined') {
        const relationshipTitle = songRelationshipTitles[relationship.type];

        if (relationship.songs && relationship.songs.length > 0) {
          const songs = relationship.songs;
          return (
            <CreditContainer key={relationship.type}>
              <CreditHeading>{relationshipTitle}:</CreditHeading>
              {songs.map((songInfo, index) => {
                return (
                  <CreditContentLink
                    href={songInfo.url}
                    target='_blank'
                    key={songInfo.id}
                  >
                    {songInfo.full_title}
                  </CreditContentLink>
                );
              })}
            </CreditContainer>
          );
        }
      }

      return <React.Fragment key={relationship.type}></React.Fragment>;
    });
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
