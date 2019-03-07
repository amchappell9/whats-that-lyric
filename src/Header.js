import React from 'react'

const Header = ({ isLoggedIn, handleLogout}) => {
    return (
        <header className="h-20 border-t-4 border-magenta border-solid">
            <div className="container mx-auto pt-5 text-magenta">
                {isLoggedIn && (
                    <div className="flex justify-between">
                        <div>
                            <h1>What's That Lyric?</h1>
                        </div>
                        <div className="text-right text-xl mt-4">
                            <button onClick={handleLogout} className="text-magenta">Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header