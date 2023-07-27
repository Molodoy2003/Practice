import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SortSlice = {
	name: string
	property: 'rating' | 'title' | 'price'
}

interface FilterSliceState {
	categoryId: number
	sort: SortSlice
}

const initialState: FilterSliceState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		property: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		setSort(state, action: PayloadAction<SortSlice>) {
			state.sort = action.payload
		},
	},
})

export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer
