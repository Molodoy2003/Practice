import React, { useState } from 'react'


const Categories = ({categotyId, onChangeCategory}) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	]

	return (
		<div className='categories'>
			<ul>
				{categories.map((item, index) => (
					<li
						key={index}
						onClick={() => onChangeCategory(index)}
						className={categotyId === index ? 'active' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Categories
