import React from 'react';
import SongDescription from './SongDescription';
import SongLinks from './SongLinks';
import SongCredits from './SongCredits';

const SongInfo = ({ songInfo }) => {
  return (
    <>
      <SongDescription description={songInfo.description} />
      <SongLinks songInfo={songInfo} />
      <SongCredits
        producersArray={songInfo.producer_artists}
        album={songInfo.album}
        songRelationships={songInfo.song_relationships}
      />
    </>
  );
};

export default SongInfo;
