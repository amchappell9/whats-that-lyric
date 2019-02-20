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
                    Array.prototype.map.call(props.nowPlaying.artists, artist => artist.name).toString().split(',').join(', ')
                }</p>
            </div>
            <LyricsContainer />
        </div>
    )
}

export default NowPlaying