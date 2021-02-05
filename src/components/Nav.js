import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewGames from './NewGames';
import UpcomingGames from './UpcomingGames';


const Nav = ({setNewActive, setUpcomingActive, setPopularActive}) => {

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <Link onClick={()=>setPopularActive(true)} to="/">Popular Games</Link>
                    <Link onClick={()=>setUpcomingActive(true)} to="/upcoming-games">Upcoming Games</Link>
                    <Link onClick={()=>setNewActive(true)} to="/new-games">New Games</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav; 