import React, {
  isValidElement,
  cloneElement,
  createElement,
  useEffect,
  Children,
  ReactNode,
} from 'react'
import Highlighter from "react-highlight-words";

type SearchProps = {
  children?: ReactNode
  onDone?: (itemsFound: number) => void
  test?: boolean
  searchValue: string
  highlightTag?: any
  highlighterProps?: any
}

const shouldPierce = (child?: ReactNode): boolean =>
  isValidElement(child) &&
  typeof child.type === 'function' && child.type.name === 'Pierce'

const Search = ({
  children,
  onDone,
  test,
  searchValue,
  highlighterProps,
  highlightTag = 'mark'
}: SearchProps): JSX.Element => {
  let count = 0

  const counterTag = ({ children }: { children: JSX.Element }) => {
    count++
    return createElement(highlightTag, null, children)
  }

  const Highlight = ({ child }: { child: string }) =>
    <Highlighter
      {...highlighterProps}
      searchWords={[searchValue]}
      textToHighlight={child}
      highlightTag={counterTag}
    />

  const deepHighlight = (child?: ReactNode): any => {
    if (test && typeof child === 'string') {
      return <mark key={child}>{child}</mark>
    }
    if (typeof child === 'string') {
      return <Highlight child={child} />
    }
    if (shouldPierce(child)) {
      const piercedChildren = (child as JSX.Element).props.children
      const pierceChildren =
        (innerChild: JSX.Element) => {
          const prototype = innerChild.type.prototype
          if (prototype && prototype.isReactComponent) {
            return new innerChild.type(innerChild.props).render()
          } else {
            return innerChild.type(innerChild.props)
          }
        }
      return deepHighlight(Children.map(piercedChildren, pierceChildren))
    }
    if (isValidElement(child)) {
      const props = child.props as { children: JSX.Element }
      const children = deepHighlight(props.children)
      return cloneElement(child, props, children)
    }
    if (Array.isArray(child)) {
      return Children.map(child, deepHighlight)
    }
  }
  useEffect(() => {
    onDone && onDone(count)
  })
  return deepHighlight(children) || null
}

export const Pierce = ({ children }: { children?: any }) => children
export default Search