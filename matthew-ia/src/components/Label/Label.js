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
      <p className='label'>{this.props.text}</p>
    );
  }
}

Label.defaultProps = {
  text: '',
};

export default Label;