/**
 * SpectraContent Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import GalleryNav from "../../GalleryNav";

export class _Gallery extends Component {
  render() {
    let {p} = this.props;
    return (
      <div>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}/>
        <div>
          <div id="t2016" className="col gallery-marker">
            <img onLoad={this.props.setColumnWidth}
                 className="sm" id="1" src={p.publicPath + "ab.jpg"}/>
            <img className="sm" src={p.publicPath + "bbb.jpg"}/>
          </div>
          <div className="col">
            <img onLoad={this.props.setColumnWidth}
                 className="md" src={p.publicPath + "cd.jpg"}/>
            <p className="stacked">I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text.I'm a full column of text. I'm a full column of text. I'm a full column of text.</p>
          </div>
          <img className="lg"  src={p.publicPath + "dd.jpg"}/>
          <img className="lg"  src={p.publicPath + "dd.jpg"}/>
          <img id="t2017" className="md gallery-marker" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
          <img id="t2018" className="md gallery-marker" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
        </div>
      </div>
    );
  }
}

_Gallery.defaultProps = {
  p: {}, // project data,
  handleSmoothScroll: () => {},
  /**
   * This is important to set to an image's onLoad event handler IF its the first
   * image in a column container AND there's other content in the column.
   * Otherwise, it's unnecessary.
   */
  setColumnWidth: ()=>{},
};