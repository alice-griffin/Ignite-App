import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ({name, released, image, id}) => {



    return (
        <StyledGame>
            <div className="game-header">
            <h3>{name}</h3>
            <p>Release Date: {released}</p>
            </div>
            <img src={image} alt={name} />
        </StyledGame>
    )
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 3px 3px 15px #121212;
    background-color: #2a2c37;  
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;  
    }
    .game-header {
        color: #cdcdcd; 
    }
`;

export default Game; 