import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import styles from './Search.module.scss'
const Search = ({ searchValue, setSearchValue }) => {
	return (
		<>
			<BiSearchAlt2 className={styles.image} />
			<input
				value={searchValue}
				className={styles.search}
				type='text'
				placeholder='Поиск пиццы...'
				onChange={e => setSearchValue(e.target.value)}
			/>
			{searchValue && (
				<AiOutlineClose
					onClick={() => setSearchValue('')}
					className={styles.close}
				/>
			)}
		</>
	)
}

export default Search
