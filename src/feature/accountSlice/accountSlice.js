import { createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const dataAccount = JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : {};
const accountSlice = createSlice({
    name: 'account',
    initialState: dataAccount,
    reducers: {
        accountData(state, actions) {
            const data = actions.payload;
            console.log(data);
            localStorage.setItem('account', JSON.stringify(data));
            browserHistory.push("/quan-ly-quang-cao/chien-dich-quang-cao");
            return data;
        }
    },
});

const { actions, reducer } = accountSlice;
export const { accountData } = actions;
export default reducer;