/**
 * FloatingList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class FloatingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li><Link to='/projects/1'>{ p.number1 }</Link></li>
        <li><Link to='/projects/2'>{ p.number2 }</Link></li>
      </div>
    );
  }
}

export default FloatingList;