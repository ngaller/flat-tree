import React from 'react'

const Node = ({item, open, category}) =>
  <li className='item' onClick={() => open(category, item)}>
    {item.title}
  </li>;

export default Node
