import React from 'react';

const Nav = ({popular, upcoming, newGames}) => {


    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li>
                        Popular Games
                    </li>
                    <li>
                        Upcoming Games
                    </li>
                    <li>
                        New Games
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav; 