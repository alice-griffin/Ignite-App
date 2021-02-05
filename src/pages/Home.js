import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Nav from '../components/Nav';
import NewGames from '../components/NewGames';
import PopularGames from '../components/PopularGames';
import UpcomingGames from '../components/UpcomingGames';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const {popular, newGames, upcoming} = useSelector(state => state.games);

    const [popularActive, setPopularActive] = useState(true);
    const [upcomingActive, setUpcomingActive] = useState(false);
    const [newActive, setNewActive] = useState(false);

    console.log(`upcoming ${newActive}`);
    console.log(`popular ${popularActive}`);
    console.log(`new ${newActive}`);

    const renderComponent = () => {
        if (popularActive && !newActive && !upcomingActive) {
            return <PopularGames />
        } else if (upcomingActive && !popularActive && !newActive) {
            return <UpcomingGames />
        } else if (newActive && !popularActive && !upcomingActive) {
            return <NewGames />
        }
    }

    return(
        <div>
            <Nav setNewActive={setNewActive} setUpcomingActive={setUpcomingActive} setPopularActive={setPopularActive} />
                <Games>
                   <PopularGames />
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