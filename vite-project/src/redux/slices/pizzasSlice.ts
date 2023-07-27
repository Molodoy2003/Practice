import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

type SortSlice = {
	name: string
	property: 'rating' | 'title' | 'price'
}

interface FetchPizzasSlice {
	categoryId: number
	searchValue: string
	sortType: SortSlice
}

type PizzaItem = {
	id: string
	title: string
	price: number
	imageUrl: string
	sizes: number
	types: number
}

interface PizzaSliceState {
	items: PizzaItem[]
}

const initialState: PizzaSliceState = {
	items: [],
}

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzasStatus',
	async ({ categoryId, searchValue, sortType }: FetchPizzasSlice) => {
		const response = await axios.get<PizzaItem[]>(
			`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
				categoryId > 0 ? `category=${categoryId}` : ''
			}&sortBy=${sortType.property}&order=desc${
				searchValue ? `&search=${searchValue}` : ''
			}`
		)

		return response.data as PizzaItem[]
	}
)

const pizzasSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<PizzaItem[]>) {
			state.items = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.items = action.payload
		})
	},
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
