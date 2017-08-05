import React from 'react'
import FlatTree from '../src/index'
import {sampleData, categoryLabels, copyOneLevel} from './sampleData.js'

import { cloneDeep } from "lodash";

// perform DFS to find an item in the tree
// (this is not production code, the search is very inefficient)
function findSourceItem(root, category, id) {
  if(category in root) {
    for(let m of root[category])
      if(m.id === id)
        return m
  } else {
    for(let k in root) {
      for(let subItem of root[k]) {
        if(subItem.branches && subItem.branches.length) {
          const result = findSourceItem(subItem.branches, category, id)
          if(result)
            return result
        }
      }
    }
  }
  return null
}

// This is an example of how you would use the component in your app
// The "App" component simulates the environment that YOU will need to provide
// when using the NestedDropdown component.
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rootItems: copyOneLevel(sampleData)
    }
  }

  openItem(category, item) {
    const sourceItem = findSourceItem(sampleData, category, item.id)
    // console.log('findSourceItem', sourceItem)
    if(sourceItem && sourceItem.branches) {
      this._setItem(category, item.id, {loading: true})
      setTimeout(() => {
        this._setItem(category, item.id, {loading: false, branches: copyOneLevel(sourceItem.branches)})
      }, 500)
    }
  }

  closeItem(category, item) {
    this._setItem(category, item.id, {branches: undefined, loading: false})
  }

  _setItem(category, id, values) {
    const rootClone = cloneDeep(this.state.rootItems)
    // console.log('Got Clone', rootClone)
    const source = findSourceItem(rootClone, category, id)
    Object.assign(source, values)
    this.setState({rootItems: rootClone})
  }

  render() {
    return (
      <div>
        <FlatTree
          branches={this.state.rootItems}
          categoryLabels={categoryLabels}
          onOpenItem={this.openItem.bind(this)}
          onCloseItem={this.closeItem.bind(this)}
        />
      </div>
    )
  }
}
export default App
