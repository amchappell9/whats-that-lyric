import React from 'react';
import SongDescription from './SongDescription';
import SongLinks from './SongLinks';
import SongCredits from './SongCredits';

export default function SongInfo({ songInfo }) {
  return (
    <>
      <SongDescription description={songInfo.description} />
      <SongLinks
        geniusHref={songInfo.url}
        geniusAlbumHref={songInfo.album.url}
      />
      <SongCredits
        producersArray={songInfo.producer_artists}
        album={songInfo.album}
        songRelationships={songInfo.song_relationships}
      />
    </>
  );
}
