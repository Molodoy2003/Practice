import React, { useState } from 'react'

const Sort = ({ sortType, onChangeSort }) => {
	const [open, setOpen] = useState(false)
	const sorts = [
		{ name: 'популярности', property: 'rating' },
		{ name: 'цене', property: 'price' },
		{ name: 'алфавиту', property: 'title' }
	]

	const onClickSort = index => {
		onChangeSort(index)
		setOpen(false)
	}

	return (
		<div className='sort'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				></svg>
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{sortType.name}</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{sorts.map((obj, index) => (
							<li
								key={index}
								onClick={() => onClickSort(obj)}
								className={sortType.property === obj.property  ? 'active' : ''}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
