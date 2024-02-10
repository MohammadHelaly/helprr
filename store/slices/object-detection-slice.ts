import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ObjectDetectionState = {
	label: string | undefined;
	isFocused: boolean;
};

const initialState: ObjectDetectionState = {
	label: undefined,
	isFocused: false,
};

const objectDetectionSlice = createSlice({
	name: "objectDetection",
	initialState,
	reducers: {
		setIsFocused(state, action: PayloadAction<{ isFocused: boolean }>) {
			state.isFocused = action.payload.isFocused;
		},
		setLabel(state, action: PayloadAction<{ label: string }>) {
			state.label = action.payload.label;
		},
		clearLabel(state) {
			state.label = undefined;
		},
	},
});

export const objectDetectionActions = objectDetectionSlice.actions;

export default objectDetectionSlice.reducer;
