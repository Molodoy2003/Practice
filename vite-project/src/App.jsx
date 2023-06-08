import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import './scss/app.scss'

const App = () => {
	const [searchValue, setSearchValue] = useState('')
	
	return (
		<div>
			<div className='wrapper'>
				<Header searchValue={searchValue} setSearchValue={setSearchValue}/>
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
