import { createSlice } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import campaignApi from '../../api/campaignApi'

const browserHistory = createBrowserHistory();

const dataCampaignAds = JSON.parse(localStorage.getItem('campaign')) ? JSON.parse(localStorage.getItem('campaign')) : {};
const campaignAdsSlice = createSlice({
    name: 'campaign',
    initialState: dataCampaignAds,
    reducers: {
        campaignAds(state, actions) {
            const data = actions.payload;
            localStorage.setItem('campaign', JSON.stringify(data));
            return data;
        },
        addCampaignToServer(state, actions) {
            const data = actions.payload;
            localStorage.setItem('campaign', JSON.stringify({}));
            const fetchCampaignData = async () => {
                await campaignApi.add(data);
            };

            fetchCampaignData();
            browserHistory.push("/quan-ly-quang-cao/tong-hop-quang-cao");
        }
    },
});

const { actions, reducer } = campaignAdsSlice;
export const { campaignAds, addCampaignToServer } = actions;
export default reducer;