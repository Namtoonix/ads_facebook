import accountSlice from '../feature/accountSlice/accountSlice';
import checkStepSlice from '../feature/checkStep/checkStepSlice';
import checkStep2Slice from '../feature/checkStep/checkStep2Slice';
import stepCompletedSlice from '../feature/checkStep/stepCompletedSlice';
import step2CompletedSlice from '../feature/checkStep/step2CompletedSlice';
import campaignAdsSlice from '../feature/campaignAds/campaignAdsSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  checkStep: checkStepSlice,
  checkStep2: checkStep2Slice,
  stepCompleted: stepCompletedSlice,
  step2Completed: step2CompletedSlice,
  account: accountSlice,
  campaignAds: campaignAdsSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
