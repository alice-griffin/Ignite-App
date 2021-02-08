import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Game from '../components/Game';
import {motion} from 'framer-motion';
import Nav from './Nav';

const NewGames = () => {

    const {newGames} = useSelector(state => state.games);

    return (
        <div className="NewGames">
            <Nav />
            <Games>
            {newGames.map((game) => (
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
    justify-items: center;
    margin-right: 8%;
    margin-left: 8%;
`;

export default NewGames;