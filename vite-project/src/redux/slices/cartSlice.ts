import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getCartLs } from '../../utils/getCartLS'
import { calcTotalPrice } from '../../utils/calcTotalPrice'

export type CartItem = {
	id: string
	title: string
	price: number
	imageUrl: string
	size: number
	type: string
}

interface CartSliceState {
	totalPrice: number
	items: CartItem[]
}

const cartData = getCartLs()

const initialState: CartSliceState = {
	items: cartData.items,
	totalPrice: cartData.totalPrice,
}

const cartSlice = createSlice({	
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItem>) {
			state.items.push(action.payload)
			state.totalPrice = calcTotalPrice(state.items)
		},
		removeItem(state, action: PayloadAction<string>) {
			;(state.items = state.items.filter(item => item.id !== action.payload)),
				(state.totalPrice = state.items.reduce((sum, item) => {
					return item.price + sum
				}, 0))
		},
		clearItems(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
