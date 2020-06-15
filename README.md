
# search-children


<code>&lt;Search value="text"&gt;Specify **text** to find and mark&lt;/Search&gt;</code>

[![NPM](https://img.shields.io/npm/v/search-children.svg)](https://www.npmjs.com/package/search-children) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install search-children
```

## Usage

```tsx
import React from 'react'
import Search, { Pierce } from 'search-children'

const Deep = () =>
  <p>It can even find text rendered by a component (as opposed to just children), using the accompanying <Pierce> Element</p>

const SearchExample = () =>
  <Search highlightTag='strong' value='find'>
    <p> search-children finds text in any amount of nesting</p>
    <Pierce><Deep /></Pierce>
  </Search>
```

## Props
| Property | Type | Description |
|---|---|---|
| value | String | Text to search for.  This is the only required prop. |
| onDone | Function | Called with a `{ count }` object indicating number of matches |
| test | Boolean | Use this to mark *all* text under `search-children`'s purview |
| highlighterProps | HighlighterProps | Props to pass to the underlying search component, [react-highlight-words](https://github.com/bvaughn/react-highlight-words) |
| highlightTag | ReactNode | Tag to wrap around highlighted matches.  Defaults to `<mark>` |

## License

MIT © [jfrancos](https://github.com/jfrancos)
