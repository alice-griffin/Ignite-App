import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Game from '../components/Game';
import {motion} from 'framer-motion';


const PopularGames = () => {

    const {popular} = useSelector(state => state.games);

    return (
        <div className="PopularGames">
            <Games>
            {popular.map((game) => (
            <Game name={game.name} released={game.released} id={game.id} image={game.background_image} rating={game.rating} key={game.id} />
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
    margin-right: 8%;
    margin-left: 8%;
`;
export default PopularGames;