import { CREATE_ACCOUNT } from './constant';

// init state
export const initState = JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : {
    step: 1,
    stepCompleted: [],
    name: '',
    page: {},
    nick: {}
};

// Reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case CREATE_ACCOUNT:
            const data = action.payload;
            newState = {
                ...state,
                ...data
            }
            localStorage.setItem('account', JSON.stringify(newState));
            break
        default:
            throw new Error('Invalid action.')
    }

    return newState
}

export default reducer