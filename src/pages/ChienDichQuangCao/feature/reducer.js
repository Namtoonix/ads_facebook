import campaignApi from '../../../api/campaignApi';
import { CREATE_CAMPAIGN, ADD_CAMPAIGN } from './constant';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

// init state
export const initState = JSON.parse(localStorage.getItem('campaign')) ? JSON.parse(localStorage.getItem('campaign')) : {
    step: 1,
    stepCompleted: [],
    name: "",
    budget: 0,
    dayStart: 0,
    timeStart: 0,
    dayEnd: 0,
    timeEnd: 0,
    sex: "Nam",
    oldFrom: 15,
    oldTo: 65,
    local: [],
    media: {
        image: '',
        video: ''
    },
    mainContent: "",
    title: "",
    desc: ""
};

// Reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case CREATE_CAMPAIGN:
            const data = action.payload;
            newState = {
                ...state,
                ...data
            }
            localStorage.setItem('campaign', JSON.stringify(newState));
            break
        case ADD_CAMPAIGN:
            newState = {
                ...state
            }
            campaignApi.add(newState);
            browserHistory.push("/quan-ly-quang-cao/tong-hop-quang-cao");
            break
        default:
            throw new Error('Invalid action.')
    }

    return newState
}

export default reducer