import React, { Component } from 'react';
import Node from './Node.js'

class Branch extends Component {

  renderNodes() {
    return this.props.nodes.map(n => {
      return <Node item={n} category={this.props.name} open={this.props.open}/>
    });
  }

  renderBranch() {

    this.props.nodes.map(n => {
      if (n.branches !== undefined) {
        console.log(n)
        return 'Test';
      } else {
        return;
      }
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.label}
        <ul>{this.renderNodes()}
          <ul>{this.renderBranch()}</ul>
        </ul>

      </div>

    );
  }

}

export default Branch;
