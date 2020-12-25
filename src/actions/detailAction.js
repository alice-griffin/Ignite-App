import axios from 'axios';
import {getDetailsURL, screenshotsURL} from '../Api';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(getDetailsURL(id));
    const screenShotData = await axios.get(screenshotsURL(id));

    dispatch ({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data
        }
    });
};
