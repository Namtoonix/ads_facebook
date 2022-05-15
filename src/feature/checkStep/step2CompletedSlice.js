import { createSlice } from '@reduxjs/toolkit';

const step2Completed = JSON.parse(localStorage.getItem('stepCompleted2')) ? JSON.parse(localStorage.getItem('stepCompleted2')) : [];
const step2CompletedSlice = createSlice({
    name: 'step2_completed',
    initialState: step2Completed,
    reducers: {
        onStep2Completed(state, actions) {
            const step2Completed = actions.payload;
            if (!step2Completed) return;
            localStorage.setItem('stepCompleted2', JSON.stringify(step2Completed));
            return (step2Completed)
        }
    },
});

const { actions, reducer } = step2CompletedSlice;
export const { onStep2Completed } = actions;
export default reducer;