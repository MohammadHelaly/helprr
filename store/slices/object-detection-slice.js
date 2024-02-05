import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	label: undefined,
	isFocused: false,
};

const objectDetectionSlice = createSlice({
	name: "objectDetection",
	initialState,
	reducers: {
		setIsFocused(state, action) {
			state.isFocused = action.payload.isFocused;
		},
		setLabel(state, action) {
			state.label = action.payload.label;
		},
		clearLabel(state, action) {
			state.label = undefined;
		},
	},
});

export const objectDetectionActions = objectDetectionSlice.actions;

export default objectDetectionSlice.reducer;
