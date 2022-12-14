import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { filterButtonState, getChampionsLS } from './utils';

//Запросить список чемпионов
export const fetchChampions = createAsyncThunk(
	'champions/fetchChampions',
	async () => {
		const { data } = await axios.get(
			`https://extendsclass.com/mock/rest/eec80d67d8d5edbc8949336f913bed41/champions`
		);
		return data;
	}
);

const initialState = {
	items: getChampionsLS(),
	currentСhampions: getChampionsLS(),
	filterButton: filterButtonState.slice(),
	currentFilterButton: filterButtonState.slice(),
	status: null,
	error: null,
};

export const champions = createSlice({
	name: 'champions',
	initialState,
	reducers: {
		setCurrentСhampions: (state, action) => {
			//Записать в state отфильтрованных чемпионов
			state.currentСhampions = action.payload;
		},
		setClassButton: (state, action) => {
			//Подсветить нажатые кнопки фильтра
			if (action.payload.highlight) {
				state.currentFilterButton[action.payload.id].class = '__button__active';
				state.currentFilterButton[0].class = '__all__button__passive';
			} else {
				state.currentFilterButton = state.filterButton.slice();
			}
		},
	},
	extraReducers: {
		[fetchChampions.pending]: (state) => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchChampions.fulfilled]: (state, action) => {
			//Записать запрошенный список чемпионов в state и LS
			state.status = 'resolved';
			state.items = action.payload;
			state.currentСhampions = action.payload;
			localStorage.setItem('championsData', JSON.stringify(action.payload));
		},
		[fetchChampions.rejected]: (state, action) => { },
	}
});

export const { setCurrentСhampions, setClassButton } = champions.actions;
export default champions.reducer;