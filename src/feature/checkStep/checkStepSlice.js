import { createSlice } from '@reduxjs/toolkit';

const dataStep = JSON.parse(localStorage.getItem('step')) ? JSON.parse(localStorage.getItem('step')) : 1;
const checkStepSlice = createSlice({
  name: 'check_step',
  initialState: dataStep,
  reducers: {
    onCheckStep(state, actions) {
      const step = actions.payload;
      if (!step) return;
      localStorage.setItem('step', JSON.stringify(step));
      return(step)
    }
  },
});

const { actions, reducer } = checkStepSlice;
export const { onCheckStep } = actions;
export default reducer;