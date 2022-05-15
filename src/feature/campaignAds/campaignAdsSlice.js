import { createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const dataCampaignAds = JSON.parse(localStorage.getItem('campaign')) ? JSON.parse(localStorage.getItem('campaign')) : {};
const campaignAdsSlice = createSlice({
    name: 'campaign',
    initialState: dataCampaignAds,
    reducers: {
        campaignAds(state, actions) {
            const data = actions.payload;
            console.log(data);
            localStorage.setItem('campaign', JSON.stringify(data));
            browserHistory.push("/quan-ly-quang-cao/tong-hop-quang-cao");
            return data;
        }
    },
});

const { actions, reducer } = campaignAdsSlice;
export const { campaignAds } = actions;
export default reducer;