import React, { Component } from 'react'

class NowPlaying extends Component {
    render () {
        return (
            <div>
                <div className="flex justify-center mt-12">
                    <h1 className="text-grey text-3xl">Now Playing:</h1>                    
                </div>
                <div className="flex justify-center">
                    <p className="text-magenta font-bold text-5xl">Goosebumps</p>
                </div>
                <div className="flex justify-center">
                    <p className="text-magenta font-bold text-3xl">By Travis Scott</p>
                </div>
            </div>
        )
    }
}

export default NowPlaying