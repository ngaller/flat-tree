import React, { Component } from 'react';
import Branch from './Branch'
class Node extends Component {
  constructor(props){
    super(props);
    this.state = {
      openBranch: null
    }
  }

  render() {
    let {item, onOpenItem, category} = this.props;

    let hasBranches = item.branches && Object.keys(item.branches).length > 0;

    return (

        <li className='item' onClick={() => onOpenItem(category, item)}>
          {item.title}
        </li>
    );
  }

}

export default Node
