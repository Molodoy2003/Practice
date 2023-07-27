import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartItem, addItem } from '../../redux/slices/cartSlice'

type PizzaBlockProps = {
	id: string
	title: string
	price: number
	imageUrl: string
	sizes: number[]
	types: number[]
}

const typeNames = ['тонкое', 'сырный борт']

const PizzaBlock: React.FC<PizzaBlockProps> = ({
	id,
	title,
	price,
	imageUrl,
	sizes,
	types,
}) => {
	const [activeType, setActiveType] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const [count, setCount] = useState(0)
	const dispatch = useDispatch()

	const onClickAdd = () => {
		const item: CartItem = {
			id,
			title,
			price,
			imageUrl,
			type: typeNames[activeType],
			size: activeSize,
		}
		dispatch(addItem(item))
		setCount(count + 1)
	}

	return (
		<div className='pizza-block'>
			<Link to={`/pizza/${id}`}>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
			</Link>
			<h4 className='pizza-block__title'>{title}</h4>
			<div className='pizza-block__selector'>
				<ul>
					{types.map((type, index) => (
						<li
							key={index}
							onClick={() => setActiveType(type)}
							className={activeType === type ? 'active' : ''}
						>
							{typeNames[type]}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size, index) => (
						<li
							key={index}
							onClick={() => setActiveSize(index)}
							className={activeSize === index ? 'active' : ''}
						>
							{size} см.
						</li>
					))}
				</ul>
			</div>
			<div className='pizza-block__bottom'>
				<div className='pizza-block__price'>от {price} р.</div>
				<div
					className='button button--outline button--add'
					onClick={onClickAdd}
				>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					></svg>
					<span>Добавить</span>
					<i>{count}</i>
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
