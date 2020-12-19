import React from 'react'

const Search = ({ searchInput, search, handleSearch }) => {
	return (
		<div className="Search">
			<input
				ref={searchInput}
				type="text"
				value={search}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default Search
