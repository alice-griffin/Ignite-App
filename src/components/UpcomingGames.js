import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Game from '../components/Game';
import {motion} from 'framer-motion';
import Nav from './Nav';


const UpcomingGames = () => {

    const {upcoming} = useSelector(state => state.games);

    return (
        <div className="UpcomingGames">
            <Nav />
            <Games>
            {upcoming.map((game) => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
            ))}
            </Games>
        </div>
    )
}

const Games = styled(motion.div)`
    display: grid; 
    min-height: 80vh;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-column-gap: 2rem; 
    grid-row-gap: 2rem; 
    margin-right: 5%;
    margin-left: 5%;
`;
export default UpcomingGames;