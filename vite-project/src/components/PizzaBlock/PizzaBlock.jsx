import React, { useState } from 'react'

const PizzaBlock = ({ title, price, image, sizes, types }) => {
	const [activeType, setActiveType] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const typeNames = ['тонкое', 'традиционное']

	return (
		<div className='pizza-block'>
			<img className='pizza-block__image' src={image} alt='Pizza' />
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
				<div className='pizza-block__price'>от {price} ₽</div>
				<div className='button button--outline button--add'>
					<svg
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					></svg>
					<span>Добавить</span>
					<i>0</i>
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
