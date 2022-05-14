import { createSlice } from '@reduxjs/toolkit';

const stepCompleted = JSON.parse(localStorage.getItem('stepCompleted')) ? JSON.parse(localStorage.getItem('stepCompleted')) : [];
const stepCompletedSlice = createSlice({
  name: 'step_completed',
  initialState: stepCompleted,
  reducers: {
    onStepCompleted(state, actions) {
      const stepCompleted = actions.payload;
      if (!stepCompleted) return;
      localStorage.setItem('stepCompleted', JSON.stringify(stepCompleted));
      return(stepCompleted)
    }
  },
});

const { actions, reducer } = stepCompletedSlice;
export const { onStepCompleted } = actions;
export default reducer;