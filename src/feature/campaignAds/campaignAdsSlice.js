import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import campaignApi from "../../api/campaignApi";
import { onStep2Completed } from "../checkStep/step2CompletedSlice";

export const addDataToServer = createAsyncThunk(
    'addDataToServer',
    async (data, thunkAPI) => {
      thunkAPI.dispatch(onStep2Completed([]));
      return campaignApi.add(data);
    }
  )

const dataCampaignAds = JSON.parse(localStorage.getItem('campaign')) ? JSON.parse(localStorage.getItem('campaign')) : {};
const campaignAdsSlice = createSlice({
    name: 'campaign',
    initialState: dataCampaignAds,
    reducers: {
        campaignAds(state, actions) {
            const data = actions.payload;
            localStorage.setItem('campaign', JSON.stringify(data));
            return data;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(addDataToServer.fulfilled, (state, action) => {

        })
      },
});

const { actions, reducer } = campaignAdsSlice;
export const { campaignAds } = actions;
export default reducer;