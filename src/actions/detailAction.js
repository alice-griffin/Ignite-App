import axios from 'axios';
import {getDetailsURL} from '../Api';

const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(getDetailsURL(id))

    dispatch ({
        type: "GET_DETAILS",
        payload: {
            game: detailData.data,
        }
    });
};
