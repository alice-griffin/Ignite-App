import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({setNewActive, setUpcomingActive, setPopularActive}) => {

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <button onClick={() => setNewActive(false) && setUpcomingActive(false) && setPopularActive(true)}>
                        Popular Games
                    </button>
                    <button onClick={() => setUpcomingActive(true) && setNewActive(false) && setPopularActive(false)}>
                        Upcoming Games
                    </button>
                    <button onClick={() => setNewActive(true) && setUpcomingActive(false) && setPopularActive(false)}>
                        New Games
                    </button>
                </ul>
            </nav>
        </div>
    )
}

export default Nav; 