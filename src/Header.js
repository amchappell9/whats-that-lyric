import React from 'react'

const Header = ({isLoggedIn}) => {
    let header;

    if (isLoggedIn) {
        header = (
            <header className="h-20 border-b border-black border-solid">
                <div className="container mx-auto pt-5 text-magenta">
                    <h1>What's That Lyric?</h1>
                </div>
            </header>
        );
    } else {
        header = (
            <header className="h-20 border-b border-black border-solid">
                <div className="container mx-auto pt-5 text-magenta">
                    <h3>Non Logged in header</h3>
                </div>
            </header>
        );
    }

    return header;
}

export default Header