import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Game from '../components/Game';
import GameDetails from '../pages/GameDetails';
import Nav from '../components/Nav';
import NewGames from '../components/NewGames'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const {popular, newGames, upcoming} = useSelector(state => state.games);

    return(
        <div>
            <Nav popular={popular} newGames={newGames} upcoming={upcoming} />
                <Games>
                    <NewGames />
                </Games>
        </div>
    );
}

const Games = styled(motion.div)`
    display: grid; 
    min-height: 80vh;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem; 
    grid-row-gap: 3rem; 
`;

export default Home; 