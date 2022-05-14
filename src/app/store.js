import accountSlice from '../feature/accountSlice/accountSlice';
import checkStepSlice from '../feature/checkStep/checkStepSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  checkStep: checkStepSlice,
  account: accountSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
