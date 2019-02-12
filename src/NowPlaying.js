import React from 'react'
import LyricsContainer from './LyricsContainer'

const NowPlaying = (props) => {
    return (
        <div>
            <div className="flex justify-center mt-12">
                <h1 className="text-grey text-3xl">Now Playing:</h1>
            </div>
            <div className="flex justify-center">
                <p className="text-magenta font-bold text-5xl">{props.nowPlaying.songName}</p>
            </div>
            <div className="flex justify-center">
                <p className="text-magenta font-bold text-3xl">By {
                    props.nowPlaying.artists.map((artist) => {
                        return <span key={artist.id}>{artist.name}, </span>
                    })
                }</p>
            </div>
            <LyricsContainer />
        </div>
    )
}

export default NowPlaying