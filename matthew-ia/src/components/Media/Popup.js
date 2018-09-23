/**
 * Popup Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class Popup extends Component {
  render() {
    return (
      <div id="popup">
        <img src={window.location.origin + '/images/icons/2x/mouse-scroll.png'}/>
        <p>Scroll for more content.</p>
      </div>
    );
  }
}

Popup.defaultProps = {

};

export default Popup;