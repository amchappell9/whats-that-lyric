import React, { Component } from 'react'

class Login extends Component {
    render () {
        return (
            <div className="loginContainer text-magenta mt-24">
                <div className="flex justify-center text-5xl">
                    <h1>What's That Lyric?</h1>
                </div>
                <div className="flex justify-center mt-24">
                    {/* <button onClick={this.props.clickEvent} className="border-4 border-magenta text-magenta text-2xl font-bold px-24 py-8 hover:text-black hover:bg-magenta hover:border-black">Login to Spotify</button> */}
                    <a href="http://localhost:8888" className="border-4 border-magenta text-magenta text-3xl font-bold px-16 py-6 hover:text-black hover:bg-magenta hover:border-black no-underline">Login</a>
                </div>
            </div>
        )
    }
}

export default Login