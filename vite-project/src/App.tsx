import React, { createContext, useState, Dispatch, SetStateAction  } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import Cart from './pages/Cart'
import Home from './pages/Home'
import PizzaInfo from './pages/PizzaInfo'
import './scss/app.scss'


interface AppContextType {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
	searchValue: '',
  setSearchValue: () => {}
})

const App = () => {
	const [searchValue, setSearchValue] = useState('')
	const { id } = useParams()

	return (
		<AppContext.Provider value={{ searchValue, setSearchValue }}>
			<Routes>
				<Route path='/' element={<MainLayouts />}>
					<Route path='' element={<Home />} />
					<Route path='cart' element={<Cart />} />
					<Route path='pizza/:id' element={<PizzaInfo />} />
				</Route>
			</Routes>
		</AppContext.Provider>
	)
}

export default App
