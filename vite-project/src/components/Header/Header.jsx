import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

const Header = ({searchValue, setSearchValue}) => {
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
							<h1>React Pizza</h1>
							<p>самая вкусная пицца в Бресте</p>
						</div>
					</div>
				</Link>
				<Search searchValue={searchValue} setSearchValue={setSearchValue}/>
				<div className='header__cart'>
					<Link to='/cart' className='button button--cart'>
						<span>520 ₽</span>
						<div className='button__delimiter'></div>
						<svg
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						></svg>
						<span>3</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
