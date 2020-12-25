import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Game from '../components/Game';
import {motion} from 'framer-motion';

const NewGames = () => {

    const {newGames} = useSelector(state => state.games);

    console.log(newGames);

    return (
        <div className="NewGames">
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
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem; 
    grid-row-gap: 3rem; 
`;

export default NewGames;