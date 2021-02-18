import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewGames from './NewGames';
import UpcomingGames from './UpcomingGames';


const Nav = ({setNewActive, setUpcomingActive, setPopularActive}) => {

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li><h1>GameShop</h1></li>
                    <li><NavLink exact activeClassName="underline" to="/">Popular Games</NavLink></li>
                    <li><NavLink exact activeClassName="underline" to="/upcoming-games">Upcoming Games</NavLink></li>
                    <li><NavLink exact activeClassName="underline" to="/new-games">New Games</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav; 