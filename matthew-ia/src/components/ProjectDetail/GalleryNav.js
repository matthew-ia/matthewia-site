/**
 * GalleryNav Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class GalleryNav extends Component {
  render() {
    let {handleScroll} = this.props;
    return (
      <div id="gallery-nav">
        <ul>
          <li><a onClick={handleScroll}
                 className="gallery-link active"
                 href="#t2016">2016</a></li>
          <li><a onClick={handleScroll}
                 className="gallery-link"
                 href="#t2017">2017</a></li>
          <li><a onClick={handleScroll}
                 className="gallery-link"
                 href="#t2018">2018</a></li>
        </ul>
      </div>
    );
  }
}

GalleryNav.defaultProps = {
  handleScroll: ()=>{} // click handler for scrolling to gallery-marker elements

};

export default GalleryNav;