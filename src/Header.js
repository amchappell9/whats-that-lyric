import React from 'react'

const Header = ({isLoggedIn}) => {
    return (
        <header className="h-20 border-b border-black border-solid">
            <div className="container mx-auto pt-5 text-magenta">
                {isLoggedIn ? (
                    <h1>What's That Lyric?</h1>
                ) : (
                    {/* <h3>Non Logged in header</h3> */}
                )}
            </div>
        </header>
    );
}

export default Header