import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewGames from './NewGames';
import UpcomingGames from './UpcomingGames';


const Nav = ({setNewActive, setUpcomingActive, setPopularActive}) => {

    return (
        <div className="Nav">
            <nav>
            <h1>GameShop</h1>
                <ul>
                    <NavLink exact activeClassName="underline" to="/">Popular Games</NavLink>
                    <NavLink exact activeClassName="underline" to="/upcoming-games">Upcoming Games</NavLink>
                    <NavLink exact activeClassName="underline" to="/new-games">New Games</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Nav; 