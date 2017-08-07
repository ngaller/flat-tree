import React, { Component } from 'react';
import Node from './Node.js'
import FlatTree from './FlatTree'

class Branch extends Component {

  renderNodes() {
    return this.props.nodes.map(n => {
      return <Node key={n.id} item={n} category={this.props.name} onOpenItem={this.props.onOpenItem}/>
    });
  }

  renderBranch() {
    if(!this.props.nodes) return;
    return this.props.nodes.map(n => {
      if (n.branches !== undefined) {
        return Object.keys(n.branches).map(k => {
          return <FlatTree branches={n.branches} categoryLabels={this.props.categoryLabels} onOpenItem={this.props.onOpenItem} />
        });
      } else {
        return;
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.label}
        <ul>{this.renderNodes()}
          <ul className="level">{this.renderBranch()}</ul>
        </ul>

      </div>

    );
  }

}

export default Branch;
