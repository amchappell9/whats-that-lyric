import React, { Component } from 'react'

class Login extends Component {
    render () {
        return (
            <div className="loginContainer text-magenta mt-24">
                <div className="flex justify-center text-5xl">
                    <h1>What's That Lyric?</h1>
                </div>
                <div className="flex justify-center mt-32">
                    <button className="border-4 border-magenta text-magenta text-2xl font-bold px-24 py-8 hover:text-black hover:bg-magenta hover:border-black">Login to Spotify</button>
                </div>
            </div>
        )
    }
}

export default Login