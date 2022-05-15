import { createSlice } from '@reduxjs/toolkit';

const dataStep = JSON.parse(localStorage.getItem('step2')) ? JSON.parse(localStorage.getItem('step2')) : 1;
const checkStep2Slice = createSlice({
  name: 'check_step2',
  initialState: dataStep,
  reducers: {
    onCheckStep2(state, actions) {
      const step = actions.payload;
      if (!step) return;
      localStorage.setItem('step2', JSON.stringify(step));
      return(step)
    }
  },
});

const { actions, reducer } = checkStep2Slice;
export const { onCheckStep2 } = actions;
export default reducer;