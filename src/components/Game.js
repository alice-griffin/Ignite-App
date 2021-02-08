import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';

const Game = ({name, released, image, id, rating}) => {

    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <div className="game-header">
            <h3>{name}</h3>
            <p>Release Date: {released}</p>
            <div className="rating"><p>Rating: {rating}</p></div>
            </div>
            <Link to={`/details/${id}`}><img src={image} alt={name} /></Link>
        </StyledGame>
    )
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 3px 3px 15px #121212;
    background-color: #303346;  
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 45vh;
        object-fit: cover; 
        transform: translateY(7px);
    }
    .game-header {
        color: #cdcdcd;
        padding: 15px;
    }
`;

export default Game; 