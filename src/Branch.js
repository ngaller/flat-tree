import React from 'react'
import PropTypes from 'prop-types'
import Node from './Node'
import FlatTree from './FlatTree'

const Branch = ({name, nodes, categoryLabels}) => {
  return <div className='branch'>
    <div className='nodes'>
      {nodes.map(item => <Node item={item} key={item.id} />)}
    </div>
    <div className='sub-branch'>
      {nodes.map(item => item.branches && <FlatTree key={item.id} branches={item.branches} categoryLabels={categoryLabels} />)}
    </div>
  </div>
}
Branch.propTypes = {
  nodes: PropTypes.array.isRequired
}

export default Branch
