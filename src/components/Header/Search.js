import React from 'react'

const Search = (props) => {
  return (
    <><input value={props.value} onChange={props.onSearch}  placeholder="Enter Movies to Search"/></>
  )
}

export default Search