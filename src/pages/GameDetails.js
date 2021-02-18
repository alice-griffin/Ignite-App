import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../components/Nav';
import Nav from '../components/Nav';

const GameDetail = () => {

    const { screen, game } = useSelector(state => state.detail);

    return (
        <StyledDetails>
            <Nav />
            <div className="game-details">
                <div className="card-shadow">
                    <div className="stats">
                        <h3>{game.name}</h3>
                        <div className="genres">
                                {game.genres && game.genres.map(data => (
                                    <p className="genre-boxes" key={data.id}>{data.name}</p>
                                ))}
                            </div>
                        <div className="rating">
                            <p>Rating: {game.rating}</p>
                        </div>
                        <div className="info">
                            <div className="platforms">
                                <p>Platforms: </p>
                                {game.platforms && game.platforms.map(data => (
                                    <p key={data.platform.id}>{data.platform.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <img src={game.background_image} alt="image" /> */}
                </div>
                <div className="gallery-section">

                    <div className="gallery">
                        <AliceCarousel autoPlay autoPlayInterval="2000" paddingLeft="10">
                            {screen.results && screen.results.map(screen => (
                                <img className="screenshot" src={screen.image} key={screen.id} alt="screenshot" />
                            ))}
                        </AliceCarousel>
                    </div>
                </div>
                <div className="bottom-info">
                    <div id='out'></div>
                </div>
            </div>
        </StyledDetails>
    );
};

const StyledDetails = styled(motion.div)`
    .screenshot {
        width: 100%;
        height: 400px;
    }

    .stats {
        color: #cdcdcd;
        display: flex;
        flex-direction: column;
    }
    
    .card-shadow {
        color: #cdcdcd;
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
    }

    .gallery {
        width: 50%;
        margin: auto;
    }

    p {
        font-size: 14px;
        margin: 0;
        margin-right: 10px;
        color: #cdcdcd;
    }

    .info {
        margin-bottom: 10px;
    }

    .platforms {
        display: flex;
    }

    h3 {
        font-size: 28px;
        margin: 0;
    }

    .rating {
        display: flex;
    }

    .genres {
        display: flex;
    }

    .genre-boxes {
        background-color: #cdcdcd;
        color: black; 
        padding: 5px;
        border-radius: 5px;
        font-weight: bold;
        margin-bottom: 5px;
    }
`;

export default GameDetail; 