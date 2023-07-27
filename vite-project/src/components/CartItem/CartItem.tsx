import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/slices/cartSlice.js'

type CartItemProps = {
	id: string
	title: string
	type: string
	price: number
	imageUrl: string
}

const CartItem: React.FC<CartItemProps> = ({
	id,
	title,
	type,
	price,
	imageUrl,
}) => {
	const dispatch = useDispatch()

	const onRemoveItem = () => {
		dispatch(removeItem(id))
	}

	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
			</div>
			<div className='cart__item-info'>
				<h3>{title}</h3>
				<p>{type}, 26 см.</p>
			</div>
			<div className='cart__item-price'>
				<b>{price} р.</b>
			</div>
			<div className='cart__item-remove'>
				<div
					className='button button--outline button--circle'
					onClick={onRemoveItem}
				>
					<FaPlus />
				</div>
			</div>
		</div>
	)
}

export default CartItem
