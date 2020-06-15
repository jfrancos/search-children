import React from 'react'
import Search, { Pierce } from 'search-children'

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
    <Search highlightTag='strong' value='as'><div>asdf</div><div>asdf</div></Search>
    <Search value='we'><Pierce><DeepEl/><DeepEl/></Pierce>we</Search>
    hello
    <Search value='as'><Pierce><SearchMe><div>asdf</div><div>asdf</div></SearchMe></Pierce></Search>

    <Search value=''></Search>
    <Search value='sd'>asdf</Search>

  </>
}

export default App
