import React from 'react';
import Navigation from './Navigation'

export default function Header() {
    return (
        <header>
            <div className="gradient">
                <div className="upper-header"></div>

                <div id="intro">

                    <div className="name flex">
                        Jimmy Reilly
                    </div>

                    <div id="welcome" className="flex">
                        Welcome to My Portfolio
                    </div>

                </div>
                <Navigation />
            </div>
        </header>
    )
}