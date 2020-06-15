import React, { useState } from 'react'
import Search, { Pierce } from 'search-children'
import './index.css'

const Deep = () =>
  <p>
    It can even find text rendered by a component (as opposed to just children),
    using the accompanying Pierce element
  </p>

const SearchExample = () => {
  const [searchCount, setSearchCount] = useState(0)
  // @ts-ignore
  const handleSearchDone = ({ count }) => {
    setSearchCount(count)
  }
  console.log(searchCount)
  return (
    <Search value='find' onDone={handleSearchDone}>
      <p>search-children finds text in any amount of nesting</p>
      <Pierce><Deep /></Pierce>
    <p>Here, search-children finds {searchCount.toString()} results.</p>
    </Search>
  )
}
export default SearchExample
