/**
 * GalleryNav Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class GalleryNav extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    
    let links = [];
    for (let l of this.props.links) {
      links.push(<li>
        <a onClick={props.handleScroll}
           className={'gallery-link' + ' ' + l.activeClass}
           href={l.href}>{l.text}
         </a>
      </li>);
    }

    this.state = {
      links: links,
    };
  }
  render() {
    return (
      <div id="gallery-nav">
        <ul>
          {this.state.links}
        </ul>
      </div>
    );
  }
}

GalleryNav.defaultProps = {
  handleScroll: ()=>{}, // click handler for scrolling to gallery-marker elements
  links: [],
};

export default GalleryNav;