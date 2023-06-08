import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
	return (
		<div class='cart'>
			<div class='cart__top'>
				<h2 class='content__title'>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					></svg>
					Корзина
				</h2>
				<div class='cart__clear'>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					></svg>

					<span>Очистить корзину</span>
				</div>
			</div>
			<div class='content__items'>
				<div class='cart__item'>
					<div class='cart__item-img'>
						<img
							class='pizza-block__image'
							src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
							alt='Pizza'
						/>
					</div>
					<div class='cart__item-info'>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div class='cart__item-count'>
						<div class='button button--outline button--circle cart__item-count-minus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
						<b>2</b>
						<div class='button button--outline button--circle cart__item-count-plus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
					<div class='cart__item-price'>
						<b>770 ₽</b>
					</div>
					<div class='cart__item-remove'>
						<div class='button button--outline button--circle'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
				</div>
				<div class='cart__item'>
					<div class='cart__item-img'>
						<img
							class='pizza-block__image'
							src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
							alt='Pizza'
						/>
					</div>
					<div class='cart__item-info'>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div class='cart__item-count'>
						<div class='button button--outline button--circle cart__item-count-minus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
						<b>2</b>
						<div class='button button--outline button--circle cart__item-count-plus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
					<div class='cart__item-price'>
						<b>770 ₽</b>
					</div>
					<div class='cart__item-remove'>
						<div class='button button--outline button--circle'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
				</div>
				<div class='cart__item'>
					<div class='cart__item-img'>
						<img
							class='pizza-block__image'
							src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
							alt='Pizza'
						/>
					</div>
					<div class='cart__item-info'>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div class='cart__item-count'>
						<div class='button button--outline button--circle cart__item-count-minus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
						<b>2</b>
						<div class='button button--outline button--circle cart__item-count-plus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
					<div class='cart__item-price'>
						<b>770 ₽</b>
					</div>
					<div class='cart__item-remove'>
						<div class='button button--outline button--circle'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
				</div>
				<div class='cart__item'>
					<div class='cart__item-img'>
						<img
							class='pizza-block__image'
							src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
							alt='Pizza'
						/>
					</div>
					<div class='cart__item-info'>
						<h3>Сырный цыпленок</h3>
						<p>тонкое тесто, 26 см.</p>
					</div>
					<div class='cart__item-count'>
						<div class='button button--outline button--circle cart__item-count-minus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
						<b>2</b>
						<div class='button button--outline button--circle cart__item-count-plus'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
					<div class='cart__item-price'>
						<b>770 ₽</b>
					</div>
					<div class='cart__item-remove'>
						<div class='button button--outline button--circle'>
							<svg
								width='10'
								height='10'
								viewBox='0 0 10 10'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							></svg>
						</div>
					</div>
				</div>
			</div>
			<div class='cart__bottom'>
				<div class='cart__bottom-details'>
					<span>
						{' '}
						Всего пицц: <b>3 шт.</b>{' '}
					</span>
					<span>
						{' '}
						Сумма заказа: <b>900 ₽</b>{' '}
					</span>
				</div>
				<div class='cart__bottom-buttons'>
					<Link
						to='/'
						class='button button--outline button--add go-back-btn'
					>
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
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							></path>
						</svg>

						<span>Вернуться назад</span>
					</Link>
					<div class='button pay-btn'>
						<span>Оплатить сейчас</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
