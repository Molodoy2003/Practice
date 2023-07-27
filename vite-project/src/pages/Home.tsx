import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppContext } from '../App'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sort from '../components/Sort/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import { fetchPizzas } from '../redux/slices/pizzasSlice'
import { RootState } from '../redux/store'
import { useAppDispatch } from '../redux/store'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const categoryId = useSelector(
		(state: RootState) => state.filterSlice.categoryId
	)
	const sortType = useSelector((state: RootState) => state.filterSlice.sort)    
	const items = useSelector((state: RootState) => state.pizzasSlice.items)

	const { searchValue } = useContext(AppContext)

	const onChangeCategory = (id: number) => {
		dispatch(setCategoryId(id))
	}

	useEffect(() => {
		dispatch(
			fetchPizzas({
				categoryId,
				sortType,
				searchValue,
			})
		)
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue])

	return (
		<>
			<div className='content__top'>
				<Categories
					categoryId={categoryId}
					onChangeCategory={(id: number) => onChangeCategory(id)}
				/>
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items.map((item: any) => (
					<PizzaBlock key={item.id} {...item} />
				))}
			</div>
		</>
	)
}

export default Home
