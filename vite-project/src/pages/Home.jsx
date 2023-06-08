import { useEffect, useState } from 'react'
import Categories from '../components/Categories/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Sort from '../components/Sort/Sort'

const Home = () => {
	const [items, setItems] = useState([])
	const [sortType, setSortType] = useState({
		name: 'популярности',
		property: 'rating'
	})
	const [categotyId, setCategotyId] = useState(0)

	useEffect(() => {
		fetch(
			`https://647efc54c246f166da8fd2c1.mockapi.io/items?${
				categotyId > 0 ? `category=${categotyId}` : ''
			}&sortBy=${sortType.property}&order=desc`
		)
			.then(res => {
				return res.json()
			})
			.then(arr => {
				console.log(arr)
				setItems(arr)
			})
		window.scrollTo(0, 0)
	}, [categotyId, sortType])

	return (
		<>
			<div className='content__top'>
				<Categories
					categotyId={categotyId}
					onChangeCategory={id => setCategotyId(id)}
				/>
				<Sort
					sortType={sortType}
					onChangeSort={id => setSortType(id)}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items.map(item => (
					<PizzaBlock
						key={item.id}
						title={item.title}
						price={item.price}
						image={item.imageUrl}
						sizes={item.sizes}
						types={item.types}
					/>
				))}
			</div>
		</>
	)
}

export default Home
