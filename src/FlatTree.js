import React from 'react'
import Branch from './Branch'

class FlatTree extends React.Component {

  renderBranch(name) {
    const label = this.props.categoryLabels[name]
    return <Branch open={this.props.onOpenItem} key={name} name={name} label={label} nodes={this.props.branches[name]} categoryLabels={this.props.categoryLabels} />
  }

  render() {
    return <div className='explorer'>
      { Object.keys(this.props.branches).map(k => this.renderBranch(k))}
    </div>
  }
}

export default FlatTree
