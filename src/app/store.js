import checkStepSlice from '../feature/checkStep/checkStepSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  checkStep: checkStepSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
