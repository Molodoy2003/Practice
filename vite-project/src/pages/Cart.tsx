import React from 'react'
import {  AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem/CartItem'
import { clearItems } from '../redux/slices/cartSlice.js'
import { RootState } from '../redux/store'

const Cart: React.FC = () => {
	const dispatch = useDispatch()
	const {items, totalPrice} = useSelector((state: RootState) => state.cartSlice)

	const onClearItems = () => {
		dispatch(clearItems())
	}

	return (
		<div className='cart'>
			<div className='cart__top'>
				<h2 className='content__title'>
					<AiOutlineShoppingCart />
					Корзина
				</h2>
				<div onClick={onClearItems} className='cart__clear'>
					<span>Очистить корзину</span>
				</div>
			</div>
			<div className='content__items'>
				{
					items.map((item: any) => (
						<CartItem key={item.id} {...item}/>
					))
				}
			</div>
			<div className='cart__bottom'>
				<div className='cart__bottom-details'>
					<span>
						{' '}
						Всего пицц: <b>{items.length} шт.</b>{' '}
					</span>
					<span>
						{' '}
						Сумма заказа: <b>{totalPrice} р.</b>{' '}
					</span>
				</div>
				<div className='cart__bottom-buttons'>
					<Link to='/' className='button button--outline button--add go-back-btn'>
						<svg
							width='8'
							height='14'
							viewBox='0 0 8 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7 13L1 6.93015L6.86175 1'
								stroke='#D3D3D3'
							></path>
						</svg>

						<span>Вернуться назад</span>
					</Link>
					<div className='button pay-btn'>
						<span>Оплатить сейчас</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
