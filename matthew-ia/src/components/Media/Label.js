/**
 * Label Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class Label extends Component {
  render() {
    return (
      <p id={this.props.id} className={'label'}>{this.props.text}</p>
    );
  }
}

Label.defaultProps = {
  text: '',
  id: '' // additional class name
};

export default Label;