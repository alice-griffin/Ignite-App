import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const GameDetail = () => {

const { screen, game } = useSelector(state => state.detail); 

    return (
        <StyledDetails>
        <div className="card-shadow">
            <div className="stats">
                <div className="rating">
                    <h3>{game.name}</h3>
                    <p>Rating: {game.rating}</p>
                </div>
                <div className="info">
                    <h3>Platforms</h3>
                    <div className="platforms">
                        {game.platforms && game.platforms.map(data => (
                            <h3 key={data.platform.id}>{data.platform.name}</h3>
                        ))}
                    </div>
                </div>
            </div>
            <img src={game.background_image} alt="image"/>
            <div className="gallery">
                {screen.results && screen.results.map(screen => (
                    <img src={screen.image} key={screen.id} alt="screenshot" />
                ))}
            </div>
        </div> : 
        <div>Loading Details</div>
        </StyledDetails>
    );
};

const StyledDetails = styled(motion.div)`
    card-shadow {
        color: #cdcdcd; 
    }

`

export default GameDetail; 