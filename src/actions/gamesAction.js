import axios from 'axios';
import {popularGamesURL} from '../Api';
import {upcomingGamesURL} from '../Api';
import {newGamesURL} from '../Api';


export const loadGames = () => async (dispatch) => {
    
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newData.data.results
        }
    });
    
    console.log(popularData.data.results);
}