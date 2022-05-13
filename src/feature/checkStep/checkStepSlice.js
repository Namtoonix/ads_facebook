const { createSlice } = require('@reduxjs/toolkit');

const checkStepSlice = createSlice({
  name: 'check_step',
  initialState: {},
  reducers: {
    onCheckStep(state, actions) {
      const data = actions.payload;
      if (!data) return;
      return { data };
    },
  },
});

const { actions, reducer } = checkStepSlice;
export const { onCheckStep } = actions;
export default reducer;