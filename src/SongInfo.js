import React from 'react'
import SongDescription from './SongDescription';

export default function SongInfo(props) {
    return (
        <div className="flex">
            {/* <Description /> */}
            {/* {console.log(props.songInfo.description)} */}
            <SongDescription description={props.songInfo.description} />
            {/* Links */}
            <div className="flex1 px-4 py-2 m-2">

            </div>
            {/* Song Credit */}
            <div className="flex1 px-4 py-2 m-2">

            </div>
        </div>
    )
}
