const { createSlice } = require('@reduxjs/toolkit');

const dataAccount = JSON.parse(localStorage.getItem('account')) ? JSON.parse(localStorage.getItem('account')) : {};
const accountSlice = createSlice({
    name: 'check_step',
    initialState: dataAccount,
    reducers: {
        accountData(state, actions) {
            const data = actions.payload;
            console.log(data);
            localStorage.setItem('account', JSON.stringify(data));
            return data;
        }
    },
});

const { actions, reducer } = accountSlice;
export const { accountData } = actions;
export default reducer;