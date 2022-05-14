import accountSlice from '../feature/accountSlice/accountSlice';
import checkStepSlice from '../feature/checkStep/checkStepSlice';
import stepCompletedSlice from '../feature/checkStep/stepCompletedSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  checkStep: checkStepSlice,
  stepCompleted: stepCompletedSlice,
  account: accountSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
