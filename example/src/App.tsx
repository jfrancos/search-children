import React from 'react'

import Search, { Pierce } from 'search-children'
// import 'search-children/dist/index.css'

const DeeperEl = () => <div>qrweweweqttt</div>
const DeepEl = () => <div>qwer<DeeperEl/></div>

class SearchMe extends React.Component {
  render() {
    return <>
        thas is deep
    {this.props.children}
    </>
  }
}

const App = () => {
  return <>
    <Search searchValue='as'><div>asdf</div><div>asdf</div></Search>
    <Search searchValue='we'><Pierce><DeepEl/><DeepEl/></Pierce>we</Search>
    hello
    <Search searchValue='as'><Pierce><SearchMe><div>asdf</div><div>asdf</div></SearchMe></Pierce></Search>

    <Search searchValue=''></Search>
    <Search searchValue='sd'>asdf</Search>

  </>
}

export default App
