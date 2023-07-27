import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PizzaInfo: React.FC = () => {
	const [pizza, setPizza] = useState<{
		imageUrl: string,
		title: string,
		price: number
	}>()
	const { id } = useParams()

	useEffect(() => {
		async function fetchPizza() {
			const { data } = await axios.get(
				`https://647efc54c246f166da8fd2c1.mockapi.io/items/${id}`
			)
			setPizza(data)
		}
		fetchPizza()
	}, [])

	if (!pizza) {
		return <>Загрузка</>
	}

	return (
		<div className='container' style={{ display: 'block' }}>
			<img src={pizza.imageUrl} width={300} height={300} />
			<h2>{pizza.title}</h2>
			<b style={{ fontSize: '20px' }}>{pizza.price} р</b>
			<div>
				<Link to='/' className=''>
					<button className='button button--outline button--add go-back-btn'>
						Назад
					</button>
				</Link>
			</div>
		</div>
	)
}

export default PizzaInfo
