import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from '../Search/Search'
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store';

const Header = () => {
	const {items, totalPrice} = useSelector((state: RootState) => state.cartSlice)
	const isMounted = useRef(false)


	// сохраняем корзину в localStorage
	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items)
			localStorage.setItem('cart', json)
		}
		isMounted.current = true
	}, [items])

	return ( 
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img
							width='38'
							src='./img/pizza-logo.svg'
							alt='Pizza logo'
						/>
						<div>
							<h1>Доминос Пицца</h1>
							<p>самая вкусная пицца в Бресте</p>
						</div>
					</div>
				</Link>
				<Search />
				<div className='header__cart'>
					<Link to='/cart' className='button button--cart'>
						<span>{totalPrice} р.</span>
						<div className='button__delimiter'></div>
						<BsCart3/>
						<span>{items.length}</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
