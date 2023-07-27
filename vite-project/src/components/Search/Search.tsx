import debounce from 'lodash.debounce'
import React, { useCallback, useContext, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useLocation, useParams } from 'react-router-dom'
import { AppContext } from '../../App'
import styles from './Search.module.scss'

const Search: React.FC = () => {
	const [value, setValue] = useState('')
	const { setSearchValue } = useContext(AppContext)
	const inputRef = useRef<HTMLInputElement>(null)
	const location = useLocation()
	const { id } = useParams()

	const onClickClear = () => {
		setSearchValue('')
		setValue('')
		inputRef.current?.focus()
	}

	const updateSearchValue = useCallback(
		debounce(str => {
			setSearchValue(str)
		}, 250),
		[]
	)

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		updateSearchValue(e.target.value)
	}

	return (
		<>
			{location.pathname !== '/cart' && (
				<div>
					<BiSearchAlt2 className={styles.image} />
					<input
						ref={inputRef}
						value={value}
						type='text'
						placeholder='Поиск пиццы...'
						onChange={onChangeInput}
					/>
					{value && (
						<AiOutlineClose onClick={onClickClear} className={styles.close} />
					)}
				</div>
			)}
		</>
	)
}

export default Search
