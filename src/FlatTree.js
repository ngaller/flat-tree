import React from 'react'
import Branch from './Branch'

class FlatTree extends React.Component {
  renderBranch(name) {
    return <Branch key={name} name={name} nodes={this.props.branches[name]} categoryLabels={this.props.categoryLabels} />
  }

  render() {
    return <div className='tree'>
      { Object.keys(this.props.branches).map(k => this.renderBranch(k))}
    </div>
  }
}

export default FlatTree
