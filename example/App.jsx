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
        if(subItem.branches) {
          const result = findSourceItem(subItem.branches, category, id)
          if(result)
            return result
        }
      }
    }
  }
  return null
}

function prepareTree(root, openItems, loadingItems) {
  const result = {}
  for(let category in root) {
    const items = root[category].map(item => {
      const target = {...item, branches: undefined, loading: false}
      if(openItems[category] == item.id)
        target.branches = prepareTree(item.branches, openItems, loadingItems)
      if(loadingItems[category] == item.id)
        target.loading = true
      return target
    })
    result[category] = items
  }
  return result
}

// This is an example of how you would use the component in your app
// The "App" component simulates the environment that YOU will need to provide
// when using the NestedDropdown component.
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openItems: {},
      loadingItems: {}
    }
  }

  openItem(category, item) {
    this.setState({
      loadingItems: {...this.state.loadingItems, [category]: item.id}
    })
    setTimeout(() => {
      this.setState({
        openItems: {...this.state.openItems, [category]: item.id},
        loadingItems: {...this.state.loadingItems, [category]: null}
      })
    }, 500)
  }

  render() {
    return (
      <div>
        <FlatTree
          className='explorer'
          branches={prepareTree(sampleData, this.state.openItems, this.state.loadingItems)}
          categoryLabels={categoryLabels}
          onOpenItem={this.openItem.bind(this)}
        />
      </div>
    )
  }
}
export default App
