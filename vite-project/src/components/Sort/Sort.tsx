import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../redux/slices/filterSlice'
import { RootState } from '../../redux/store';

type SortType = {
	name: string, 
	property: 'rating' | 'title' | 'price'
}
 
const sorts: SortType[] = [
	{ name: 'популярности', property: 'rating' },
	{ name: 'цене', property: 'price' },
	{ name: 'алфавиту', property: 'title' },
]

const Sort = () => {
	const dispatch = useDispatch()
	const sort = useSelector((state: RootState) => state.filterSlice.sort)
	const [open, setOpen] = useState(false)
	const sortRef = useRef<HTMLDivElement>(null)

	const onClickSort = (obj: SortType) => {
		dispatch(setSort(obj))
		setOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (!sortRef.current?.contains(e.target as Node)) {
				setOpen(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>
				<b>Сортировка по:</b>
				<span onClick={() => setOpen(!open)}>{sort.name}</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{sorts.map((obj, index) => (
							<li
								key={index}
								onClick={() => onClickSort(obj)}
								className={sort.property === obj.property ? 'active' : ''}
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
