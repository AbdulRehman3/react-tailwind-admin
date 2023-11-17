import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
	sidebarCollapsed: true,
};

const slice = createSlice({
	name: 'configs',
	initialState,
	reducers: {
		setSidebarCollapsed: (state, { payload }) => {
			state.sidebarCollapsed = payload;
		},
	},
});

// ACTIONS
export const { setSidebarCollapsed } = slice.actions;

// SELECTORS
const selectConfigsData = (state) => {
	return state.configs;
};

export const selectSidebarCollapsed = createSelector(
	selectConfigsData,
	({ sidebarCollapsed }) => sidebarCollapsed
);

export default slice.reducer;
